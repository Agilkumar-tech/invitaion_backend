const pool = require('../db');

const WishModel = {
  async create(name, wish) {
    try {
      const result = await pool.query(
        'INSERT INTO public.wishes (name, wish) VALUES ($1, $2) RETURNING *',
        [name, wish]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error in create:', err);
      throw err;
    }
  },

  async findAll() {
    try {
      const result = await pool.query(
        'SELECT * FROM public.wishes ORDER BY created_at DESC'
      );
      return result.rows;
    } catch (err) {
      console.error('Error in findAll:', err);
      throw err;
    }
  },

  async findById(id) {
    try {
      const result = await pool.query(
        'SELECT * FROM public.wishes WHERE id = $1',
        [id]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Error in findById:', err);
      throw err;
    }
  }
};

module.exports = WishModel;
