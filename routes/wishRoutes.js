const express = require('express');
const WishController = require('../controllers/wishController');

const router = express.Router();

router.post('/', WishController.createWish);
router.get('/', WishController.getAllWishes);
router.get('/:id', WishController.getWishById);

module.exports = router;
