import bcrypt from 'bcrypt';
import { pool } from './db/db.js';

const SALT_ROUNDS = 10;

// Create user in MySQL
export async function createUser(email, password) {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const [result] = await pool.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        // MySQL replaces the ? with the corresponding value safely, escaping special characters automatically.
        // The first ? → email
        // The second ? → hash
        [email, hash]
    );
    return { id: result.insertId, email };
}

// Find user by ID
export async function getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

// Find user by email
export async function getUserByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
}
