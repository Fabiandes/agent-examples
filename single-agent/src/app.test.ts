/* eslint-disable @typescript-eslint/no-floating-promises */
import request from 'supertest';
import app from './app';
import {describe, expect, test} from '@jest/globals';

describe('GET /', () => {
  test('should return 200 OK with hello world message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
