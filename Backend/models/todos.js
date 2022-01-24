const db = require('../db');
const ExpressError = require('../expressError');

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }

  static async getAll() {
    const result = await db.query(`SELECT id, todo FROM todos`);
    const todos = result.rows.map(t => new Todo(t.id, t.todo));
    return todos;
  }

  static async getById(id) {
    const result = await db.query(
      `SELECT id, todo 
            FROM todos
            WHERE id = $1`,
      [id],
    );
    const todo = result.rows[0];
    if (!todo) {
      throw new ExpressError('To do not found', 404);
    }
    return new Todo(todo.id, todo.todo);
  }

  static async create(newTodo) {
    const result = await db.query(
      `INSERT INTO todos (todo) 
                        VALUES ($1)
                        RETURNING id, todo`,
      [newTodo],
    );
    const { id, todo } = result.rows[0];
    return new Todo(id, todo);
  }

  async remove() {
    await db.query(
      `DELETE FROM todos 
             WHERE id = $1`,
      [this.id],
    );
  }
}

module.exports = Todo;
