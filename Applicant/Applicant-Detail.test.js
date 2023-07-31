const request = require('supertest');

// Change access token
const TOKEN = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InM5Y0IwZkZXQTZKUVZ1c1dTOVhaR2tmYWxOQThBMUtUUlI5Qjg1dk1NV0UifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY5MDYzMzI2MiwiZXhwIjoxNjkwNjQwNDYyLCJqdGkiOiJjMDk1NTkzZi1lZTRhLTQ1MDEtYTY5OC0zNDc5ZTRlMDJmNjciLCJ1aWQiOiJVQVQwMTMiLCJ1c2VyIjp7InByaXZ5SWQiOiJVQVQwMTMiLCJ1dWlkIjoiN2U2MDFkMDgtNzcyOS00ZjU0LTkyM2QtZmMyZDE1NzRiMmZiIn0sImNsYWltcyI6WyJ3cml0ZSIsInJlYWQiLCJwdWJsaWMiXX0.j_xKYio2Ikx6aV-MAHvvbcka0sE88DbjJJRE3NroAyVm6mL5zbBYPHhPiQjaiw82_ZIc30TwFXDoyuJ9ctOcjfyOvEJmtt4VR8INlAwOApofkyHgZVF_dZVwJlc2NMlYdAG5Z0cY-OANaLZ5jh3dIE-6Yzbi8V-xsBb3YsaWPbfT-0X7ZealDV-hugGzQK8fnbkF9WETf3FjOUcD7ccoOYUbOGb11MlwrTOfARzG4byBgICO6gFkwarmZ-TEhdVpaB9usUsLCDDKKzxKi5cR9A0JKXHTcJtIbDZ6MPGYpojYGKU4PwTENEVMz3n6s-pGFhB1e3J5mo8OmvvpwjOUHA';

describe('Applicant Detail', () => {
  it('should successfully get applicant detail', async () => {
    const response = await request('https://app.aquarius.axeleration.id/api/')
      .get('applicant/detail/877239c0-2876-11ee-be56-0242ac120002')
      .set('Authorization', `Bearer ${TOKEN}`);

    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });
});