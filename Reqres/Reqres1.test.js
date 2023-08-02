const request = require('supertest');
const app = 'https://reqres.in';

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users/2');
    console.log(response.body);
    expect(response.status).toBe(200);
  });
});

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const response = await request(app).post('/api/users')
      .send({ name: 'John Doe', job: 'Software Engineer' });
    console.log(response.body);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.job).toBe('Software Engineer');
    expect(response.status).toBe(201);
  });
});

describe('PUT /api/users/:id', () => {
  it('should update an existing user', async () => {
    const response = await request(app).put('/api/users/2')
      .send({ name: 'John Doe', job: 'Software Engineer' });
    console.log(response.body);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.job).toBe('Software Engineer');
    expect(response.status).toBe(200);
  });
});

describe('DELETE /api/users/:id', () => {
  it('should delete an existing user', async () => {
    const response = await request(app).delete('/api/users/2');
    console.log(response.body);
    expect(response.status).toBe(204);
  });
});