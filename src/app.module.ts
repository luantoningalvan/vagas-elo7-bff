import { Module } from '@nestjs/common';
import { JobsModule } from './modules/jobs/jobs.module';
import { ConfigModule } from '@nestjs/config';
import { loadEnv } from './config/env';
import { ApiModule } from './modules/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadEnv],
    }),
    ApiModule,
    JobsModule,
  ],
})
export class AppModule {}
