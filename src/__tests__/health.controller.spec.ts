import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { getDatabaseConfig, getMongoConfigOptions, getMongoConfigUri } from '../database.config';
import { HealthController } from '../health/health.controller';
import { INestApplication } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('HealthController', () => {
  let app: INestApplication;
  let healthController:HealthController;

  beforeEach(async (done) => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          getMongoConfigUri(),
          getMongoConfigOptions(),
        ),
        TypeOrmModule.forRoot(getDatabaseConfig()),
        TerminusModule,
        // VersionModule,
      ],
      controllers: [HealthController],
    }).compile();

    app = await module.createNestApplication();
    await app.init();
    healthController = await app.get<HealthController>(HealthController);
    done();
  });



  describe('Make sure Parts are instantiated', () => {
    it('healthController Should exist', (done) => {
      // arrange
      // act
      // assert
      expect(healthController).toBeDefined();
      done();
    });
  });

  describe('GET Request to "api/v1/health"', () => {
    it('Should return expected object', async(done) => {
      // arrange
      const expectedStatus = 200;
      const expectedBody = {
        'status': 'ok',
        'info': {
          'PostgresDB': {
            'status': 'up'
          },
          'MongoDB': {
            'status': 'up'
          }
        },
        'error': {},
        'details': {
          'PostgresDB': {
            'status': 'up'
          },
          'MongoDB': {
            'status': 'up'
          }
        }
      };
      // act
      const result = await request(app.getHttpServer()).get('/health');
      // assert
      expect(result.status).toBe(expectedStatus);
      expect(result.body).toEqual(expectedBody);
      done();
    });
  });

  afterAll(async (done) => {
    await app.close();
    done();
  });
});
