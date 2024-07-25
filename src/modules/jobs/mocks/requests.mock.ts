import nock from 'nock';

const mockApi = nock('http://localhost/api');

export const fetchAllJobs = () =>
  mockApi.get('/mock-vagas.json').reply(200, {
    jobs: [
      {
        title: 'especialista de fp&a',
        type: 'financeiro',
        level: 'especialista',
        location: 'são paulo, sp, brasil',
        is_active: true,
      },
      {
        title: 'estágio em riscos e controles internos',
        type: 'controles internos',
        level: 'estágio',
        location: 'são paulo, sp, brasil',
        is_active: true,
      },
    ],
  });
