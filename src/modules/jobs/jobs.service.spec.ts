import { Test, TestingModule } from '@nestjs/testing';
import { JobsService } from './jobs.service';
import { fetchAllJobs } from './mocks/requests.mock';
import { ApiService } from '../api/api.service';
import { ConfigModule } from '@nestjs/config';
import { loadEnv } from '../../config/env';

describe('JobsService', () => {
  let jobsService: JobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [loadEnv],
          envFilePath: ['.env.test'],
        }),
      ],
      providers: [JobsService, ApiService],
    }).compile();

    jobsService = module.get<JobsService>(JobsService);
  });

  it('should be defined', () => {
    expect(jobsService).toBeDefined();
  });

  describe('getJobs', () => {
    it('should return all jobs paginated', async () => {
      fetchAllJobs();

      expect(await jobsService.getJobs(1)).toMatchObject({
        rows: [
          {
            title: 'especialista de fp&a',
            type: 'financeiro',
            level: 'especialista',
            location: 'são paulo, sp, brasil',
          },
          {
            title: 'estágio em riscos e controles internos',
            type: 'controles internos',
            level: 'estágio',
            location: 'são paulo, sp, brasil',
          },
        ],
        count: 2,
      });
    });
  });
});
