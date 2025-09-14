import { pool } from '../db/db.js';

async function init() {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      brand VARCHAR(255) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    )
  `);

    await pool.query(`
    CREATE TABLE IF NOT EXISTS likes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      item_id INT NOT NULL,
      UNIQUE KEY unique_like (user_id, item_id),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (item_id) REFERENCES items(id)
    )
  `);

    console.log('✅ MySQL tables created');
    process.exit(0);
}

init().catch(err => {
    console.error(err);
    process.exit(1);
});
