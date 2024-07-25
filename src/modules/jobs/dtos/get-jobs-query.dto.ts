import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetJobsQueryDto {
  @IsNumberString()
  @IsOptional()
  page?: number = 1;

  @IsString()
  @IsOptional()
  search?: string;
}
