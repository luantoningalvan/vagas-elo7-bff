import { Test } from '@nestjs/testing';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

describe('JobsController', () => {
  let jobsController: JobsController;
  let jobsService: JobsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [
        {
          provide: JobsService,
          useValue: {
            getJobs: jest.fn(),
          },
        },
      ],
    }).compile();

    jobsService = moduleRef.get<JobsService>(JobsService);
    jobsController = moduleRef.get<JobsController>(JobsController);
  });

  describe('findAll', () => {
    it('should return an empty response', async () => {
      const result = { count: 0, rows: [] };

      jest
        .spyOn(jobsService, 'getJobs')
        .mockImplementation(async () => ({ count: 0, rows: [] }));

      expect(await jobsController.getJobs()).toMatchObject(result);
    });
  });
});
