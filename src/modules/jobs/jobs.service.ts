import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';

@Injectable()
export class JobsService {
  constructor(private readonly apiService: ApiService) {}

  async getJobs(page: number, search?: string) {
    const response = await this.apiService.getJobs();

    const filteredJobs = response.jobs.filter((job) => {
      if (!job.is_active) return false;

      if (search) {
        return job.title.toLowerCase().includes(search.toLowerCase());
      }

      return true;
    });

    const offset = (page - 1) * 5;
    const limit = offset + 5;

    const slicedJobs = filteredJobs.slice(offset, limit);

    const formatJobs = slicedJobs.map((job) => {
      return {
        title: job.title,
        type: job.type,
        level: job.level,
        location: job.location || 'Remoto',
      };
    });

    return {
      rows: formatJobs,
      count: filteredJobs.length,
    };
  }
}
