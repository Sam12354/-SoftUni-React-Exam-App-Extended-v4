import { pool } from './db.js';

// Create item in MySQL
export async function createItem({ title, brand, price, image, description }) {
    const [result] = await pool.query(
        `INSERT INTO items (title, brand, price, image, description) VALUES (?, ?, ?, ?, ?)`,
        [title, brand, price, image, description]
    );
    return { id: result.insertId, title, brand, price, image, description };
}

// Find item by ID
export async function getItemById(id) {
    const [rows] = await pool.query('SELECT * FROM items WHERE id = ?', [id]);
    return rows[0];
}
