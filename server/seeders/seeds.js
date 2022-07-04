// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const pinSeeds = require('./pinSeed.json');
const db = require('../config/connection');
const { Pin, User } = require('../models');

db.once('open', async () => {
  try {
    await Pin.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < pinSeeds.length; i++) {
      const { _id, pinAuthor } = await Pin.create(pinSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: pinAuthor },
        {
          $addToSet: {
            pins: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
