export interface GetJobsApiResponseDto {
  jobs: {
    title: string;
    type: string;
    level: string;
    location?: string;
    is_active: boolean;
  }[];
}
