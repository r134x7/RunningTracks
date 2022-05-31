const Users = require("./User");
const Posts = require("./Posts");
const Comments = require("./Comments");

Users.hasMany(Posts, {
  foreignKey: "userId",
  onDelete: 'CASCADE'
});

Users.hasMany(Comments, {
  foreignKey: "userId",
  onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
  foreignKey: "userId",
});

Posts.hasMany(Comments, {
  foreignKey: "postId",
  onDelete: 'CASCADE'
});

Comments.belongsTo(Posts, { 
  foreignKey: 'postId' 
})

Comments.belongsTo(Users, {
  foreignKey: "userId",
});

/* Users.hasMany(Comments, {
  foreignKey: "blogId",
}); */

module.exports = { Users, Posts, Comments };
