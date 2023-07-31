const request = require('supertest');

describe('Detail Jobs', () => {
  it('should successfully get detail jobs', async () => {
    const response = await request('https://app.aquarius.axeleration.id/api/web')
      .get('detail-jobs/a9938c63-c8a2-40a4-ae57-ed0f565be6e5')

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});