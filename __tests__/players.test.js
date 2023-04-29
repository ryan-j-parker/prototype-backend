const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const mockUser = {
  username: 'mulderino',
  email: 'spooky@fbi.us.gov',
  password: 'iwanttobelieve',
};

const testUser = {
  username: 'mulderino',
  email: 'spooky@fbi.us.gov',
  password: 'iwanttobelieve',
};

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  //   it('POST should create a new player', async () => {
  //     const res = await request(app).post('/api/v1/players').send({
  //       mockUser,
  //     });
  //     expect(res.body).toEqual({
  //       mockUser,
  //     });
  //   });

  it('POST /users should add a new user', async () => {
    const res = await request(app).post('/api/v1/players').send(testUser);
    expect(res.body).toEqual({
      id: expect.any(String),
      email: 'user@email.com',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
