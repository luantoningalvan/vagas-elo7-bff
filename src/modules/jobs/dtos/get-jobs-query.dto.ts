import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetJobsQueryDto {
  @IsNumberString()
  page: number = 1;

  @IsString()
  @IsOptional()
  search: string;
}
