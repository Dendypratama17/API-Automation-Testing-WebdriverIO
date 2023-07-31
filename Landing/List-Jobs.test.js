const request = require('supertest');

describe('List Jobs', () => {
  it('should successfully get a list of jobs', async () => {
    const response = await request('https://app.aquarius.axeleration.id/api/web')
      .get('/list-jobs?page=1&per_page=50')

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});