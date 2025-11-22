const { test, expect } = require('@playwright/test');
const request = require('supertest');
const app = require('../server/app');

test.describe('API tests', () => {

  test('GET /api/items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(Array.isArray(res.body.items)).toBe(true);
  });

  test('POST /api/auth/login - success', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'admin', password: 'admin' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  test('POST /api/auth/login - fail', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'foo', password: 'bar' });
    expect(res.statusCode).toBe(401);
  });

});
