const sequelize = require("../config/connection");
const { User, Posts } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Posts.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  /*   for (const post of postData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  } */

  process.exit(0);
};

seedDatabase();
