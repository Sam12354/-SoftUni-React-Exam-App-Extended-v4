import { pool } from '../db/db.js';

export async function likeItem(userId, itemId) {
    // Check if the like already exists
    const [existing] = await pool.query(
        'SELECT * FROM likes WHERE user_id = ? AND item_id = ?',
        [userId, itemId]
    );

    if (existing.length > 0) {
        throw new Error('User has already liked this item');
    }

    // Insert new like
    const [result] = await pool.query(
        'INSERT INTO likes (user_id, item_id) VALUES (?, ?)',
        [userId, itemId]
    );

    return {
        id: result.insertId,
        user_id: userId,
        item_id: itemId,
    };
}

// get all likes for an item
export async function getLikesByItem(itemId) {
    const [rows] = await pool.query(
        'SELECT * FROM likes WHERE item_id = ?',
        [itemId]
    );
    return rows;
}

// get all likes by a user
export async function getLikesByUser(userId) {
    const [rows] = await pool.query(
        'SELECT * FROM likes WHERE user_id = ?',
        [userId]
    );
    return rows;
}
