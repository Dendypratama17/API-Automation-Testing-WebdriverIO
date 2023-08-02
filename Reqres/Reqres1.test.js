const request = require('supertest');
const app = 'https://reqres.in';

describe('Positif Case', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users?page=2');
    console.log(response.body);
    expect(response.status).toBe(200);
  });
});

describe('Positif Case', () => {
  it('should create a new user', async () => {
    const response = await request(app).post('/api/users')
      .send({ name: 'morpheus', job: 'leader' });
    console.log(response.body);
    expect(response.body.name).toBe('morpheus');
    expect(response.body.job).toBe('leader');
    expect(response.status).toBe(201);
  });
});

describe('Positif Case', () => {
  it('should update an existing user', async () => {
    const response = await request(app).put('/api/users/2')
      .send({ name: 'morpheus', job: 'zion resident' });
    console.log(response.body);
    expect(response.body.name).toBe('morpheus');
    expect(response.body.job).toBe('zion resident');
    expect(response.status).toBe(200);
  });
});

describe('Positif Case', () => {
  it('should delete an existing user', async () => {
    const response = await request(app).delete('/api/users/2');
    console.log(response.body);
    expect(response.status).toBe(204);
  });
});