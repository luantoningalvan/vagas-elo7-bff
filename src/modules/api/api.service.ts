import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/config/env';
import axios, { AxiosInstance } from 'axios';
import { GetJobsApiResponseDto } from './dtos/get-jobs-api-response.dto';

@Injectable()
export class ApiService {
  baseApi: AxiosInstance;

  constructor(private readonly config: ConfigService<Env, true>) {
    this.baseApi = axios.create({
      baseURL: this.config.get('apiBaseUrl'),
    });
  }

  async getJobs() {
    const response =
      await this.baseApi.get<GetJobsApiResponseDto>('mock-vagas.json');

    return response.data;
  }
}