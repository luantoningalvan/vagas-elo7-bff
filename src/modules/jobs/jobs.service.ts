import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JobsService {
  async getJobs() {
    const response = await axios.get('https://img.elo7.com.br/mock-vagas.json');

    const { jobs } = response.data;

    const onlyActiveJobs = jobs.filter((job) => job.is_active);

    const formatJobs = onlyActiveJobs.map((job) => {
      return {
        title: job.title,
        type: job.type,
        level: job.level,
        location: job.location || 'Remoto',
      };
    });

    return formatJobs;
  }
}
