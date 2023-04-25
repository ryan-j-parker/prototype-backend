const pool = require('../utils/pool');

module.exports = class Player {
  id;
  firstName;
  lastName;
  email;
  #passwordHash; // private class field: hides it from anything outside of this class definition

  constructor(row) {
    this.id = row.id;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
    this.email = row.email;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ firstName, lastName, email, passwordHash }) {
    const { rows } = await pool.query(
      `
      INSERT INTO players (first_name, last_name, email, password_hash)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
      [firstName, lastName, email, passwordHash]
    );

    return new Player(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM players');

    return rows.map((row) => new Player(row));
  }

  static async getByEmail(email) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM players
      WHERE email=$1
      `,
      [email]
    );

    if (!rows[0]) return null;

    return new Player(rows[0]);
  }

  get passwordHash() {
    return this.#passwordHash;
  }
};
