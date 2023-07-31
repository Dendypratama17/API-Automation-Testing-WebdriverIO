const request = require('supertest');
const API_CONFIG = require('./app');

const { BASE_URL_1, BASE_URL_2, ENDPOINT_1, ENDPOINT_2, ENDPOINT_3, TOKEN } = API_CONFIG;

describe('List Jobs', () => {
  it('should successfully get a list of jobs', async () => {
    const response = await request(BASE_URL_1)
      .get(ENDPOINT_1)

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});

describe('Detail Jobs', () => {
  it('should successfully get detail jobs', async () => {
    const response = await request(BASE_URL_1)
      .get(ENDPOINT_2)

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});

describe('Applicant Detail', () => {
  it('should successfully get applicant detail', async () => {
    const response = await request(BASE_URL_2)
      .get(ENDPOINT_3)
      .set('Authorization', `Bearer ${TOKEN}`);

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});
