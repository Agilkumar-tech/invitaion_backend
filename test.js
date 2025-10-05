const WishModel = require('./models/wishModel');

(async () => {
  try {
    const newWish = await WishModel.create('Agil', 'Hello World!');
    console.log('Inserted:', newWish);

    const allWishes = await WishModel.findAll();
    console.log('All Wishes:', allWishes);
  } catch (err) {
    console.error(err);
  }
})();
