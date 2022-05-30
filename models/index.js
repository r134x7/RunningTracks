const Users = require("./User");
const Posts = require("./Posts");
const Comments = require("./Comments");

Posts.belongsTo(Users, {
  foreignKey: "id",
});

Users.hasMany(Posts, {
  foreignKey: "userId",
});

Posts.hasMany(Comments, {
  foreignKey: "postId",
});

Comments.belongsTo(Users, {
  foreignKey: "id",
});

/* Users.hasMany(Comments, {
  foreignKey: "blogId",
}); */

module.exports = { Users, Posts, Comments };
