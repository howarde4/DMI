process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testTodo;

beforeEach(async () => {
  const result = await db.query(
    `INSERT INTO todos (todo) VALUES ('test todo') RETURNING id, todo`,
  );
  testTodo = result.rows[0];
});

afterEach(async () => {
  await db.query(`DELETE FROM todos`);
});

afterAll(async () => {
  await db.end();
});

describe('GET /todos', () => {
  test('Get a list with one todo', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([testTodo]);
  });
});

describe('GET /todos/:id', () => {
  test('Gets a single todo', async () => {
    const res = await request(app).get(`/todos/${testTodo.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(testTodo);
  });
  test('Responds with 404 for invalid id', async () => {
    const res = await request(app).get(`/todos/0`);
    expect(res.statusCode).toBe(404);
  });
});

describe('POST /todos', () => {
  test('Creates a single todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ todo: 'Testing todos' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: expect.any(Number), todo: 'Testing todos' });
  });
});

describe('DELETE /todos', () => {
  test('Deletes a single todo', async () => {
    const res = await request(app).delete(`/todos/${testTodo.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ msg: 'Deleted' });
  });
  test('Responds with 404 for invalid id', async () => {
    const res = await request(app).delete(`/todos/0`);
    expect(res.statusCode).toBe(404);
  });
});
