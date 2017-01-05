'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    msg: {
      type: DataTypes.TEXT,
      validate: {
        len: [1,160]
      }
  }, {
    classMethods: {
      associate: function(models) {
        Message.hasOne(User, { through: 'user_message', foreignKey: 'userId'})
      }
    }
  });
  return Message;
};
