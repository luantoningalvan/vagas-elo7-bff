import nock from 'nock';

const mockApi = nock('http://localhost/api');

export const fetchAllJobs = () => mockApi.get('/jobs').reply(200, { jobs: [] });
