import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, MongooseHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    // private version: VersionH
    private db: TypeOrmHealthIndicator,
    private mongo: MongooseHealthIndicator,
  ) {}

  @Get()
  healthCheck() {
    return this.health.check([
      async () => this.db.pingCheck('PostgresDB', { timeout: 300 }),
      // async () =>
      async () => this.mongo.pingCheck('MongoDB', { timeout: 300 }),
    ]);
  }
}