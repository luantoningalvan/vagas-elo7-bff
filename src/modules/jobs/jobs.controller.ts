import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { GetJobsQueryDto } from './dtos/get-jobs-query.dto';

@Controller('jobs')
@UsePipes(new ValidationPipe({ transform: true }))
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get('')
  getJobs(@Query() query: GetJobsQueryDto) {
    const { page, search } = query;

    return this.jobsService.getJobs(page, search);
  }
}
