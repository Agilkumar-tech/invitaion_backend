const WishModel = require('../models/wishModel');

const WishController = {
  async createWish(req, res) {
    const { name, wish } = req.body;
    if (!name || !wish) {
      return res.status(400).json({ error: 'name and wish are required' });
    }
    try {
      const newWish = await WishModel.create(name, wish);
      res.status(201).json(newWish);
    } catch (err) {
      console.error('Error creating wish:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getAllWishes(req, res) {
    try {
      const wishes = await WishModel.findAll();
      res.json(wishes);
    } catch (err) {
      console.error('Error fetching wishes:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getWishById(req, res) {
    try {
      const wish = await WishModel.findById(req.params.id);
      if (!wish) {
        return res.status(404).json({ error: 'Wish not found' });
      }
      res.json(wish);
    } catch (err) {
      console.error('Error fetching wish:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = WishController;
