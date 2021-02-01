import * as Config from 'config';
import * as Sentry from '@sentry/node';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

require('newrelic');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const sentryConfig = Config.get('sentry');
  Sentry.init({
    dsn: sentryConfig.dsn,
    environment: Config.get('environment'),
  });

  if (process.env.SHOW_SWAGGER_UI) {
    const options = new DocumentBuilder()
      .setTitle('Customer Pre Enrollment Service')
      .setDescription('API and Trigger Endpoints for Document Processing')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);
  }

  await app.listen(Config.get('port'));
}

bootstrap();