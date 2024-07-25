import 'reflect-metadata';

import { plainToInstance } from 'class-transformer';
import { GetJobsQueryDto } from './get-jobs-query.dto';
import { validate } from 'class-validator';

test('GetJobsQueryDto', async () => {
  const validInstance = plainToInstance(GetJobsQueryDto, {
    page: '1',
    search: 'test',
  });

  const errors = await validate(validInstance);

  expect(errors).toHaveLength(0);

  const invalidInstance = plainToInstance(GetJobsQueryDto, {
    page: '0',
    search: 't',
  });

  const errors2 = await validate(invalidInstance);

  expect(errors2).toHaveLength(2);
});
