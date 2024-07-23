import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JobsService {
  async getJobs(page: number, search?: string) {
    const response = await axios.get('https://img.elo7.com.br/mock-vagas.json');

    const { jobs } = response.data;

    const filteredJobs = jobs.filter((job) => {
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
