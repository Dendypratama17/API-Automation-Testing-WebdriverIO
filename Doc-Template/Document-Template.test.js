const request = require('supertest');

const token = 'eyJhbGciOiJSUzUxMiIsImtpZCI6InM5Y0IwZkZXQTZKUVZ1c1dTOVhaR2tmYWxOQThBMUtUUlI5Qjg1dk1NV0UifQ.eyJpc3MiOiJQcml2eUlEIFByb3ZpZGVyIiwic3ViIjoiUHJpdnlJRCBQcm92aWRlciIsImlhdCI6MTY5MDY1NTcwOCwiZXhwIjoxNjkwNjYyOTA4LCJqdGkiOiJiMTg0ZjFkOC04NDAwLTQ5MTYtYmYyYS02NzQyZGQ2ZjJhNjQiLCJ1aWQiOiJVQVQwMTMiLCJ1c2VyIjp7InByaXZ5SWQiOiJVQVQwMTMiLCJ1dWlkIjoiN2U2MDFkMDgtNzcyOS00ZjU0LTkyM2QtZmMyZDE1NzRiMmZiIn0sImNsYWltcyI6WyJ3cml0ZSIsInJlYWQiLCJwdWJsaWMiXX0.bMG7FWBG5WARpAdzs-Z1OpeHt2D37jeODSY_rQq6oma3egA6S_PYON5N4ZSsKGmNb8ctjCCoDFz1fRwqbv6zZUDerz-ISsviB3WTAbqm-5tu4Qayu8Q-xcCivb4UuTZBrqlzCFg7T4rbC6_NL8KrwAIBCWAlG35iSYk4d9CRmx53BQ9c5MlDehe7XlvSbAV9Tq-4baEVY8BkWhEadORPmvoKfgESxHFEBC2J9ghiN2DWjTv6kSw0sOc3Hl7gdBKgs4-wC3khVk1AAT55Ubd5w8WZIwQzY2SRIWDzJCIORlgmiE8CRUE7JwutTmzy3lr6sFSv8ZhdgyXufxwPsnRrsQ';

describe('API Tests', () => {

  it('should upload a document', async () => {
    const response = await request('https://app.aquarius.axeleration.id/api/')
      .post('template/upload')
      .set('Authorization', `Bearer ${token}`)
      .field('title', 'Test12')
      .field('type', 'Test12')
      .attach('document', './Document/Test.pdf'); 

    expect(response.status).toBe(201); 
  });
});