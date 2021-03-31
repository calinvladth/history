'use strict';
const bcrypt = require('bcrypt')

function hash(user, options) {
  const saltRounds = 10;
  return bcrypt.genSalt(saltRounds)
      .then(salt => bcrypt.hash(user.pass, salt, null))
      .then(hash => {
        user.setDataValue('pass', hash)
      })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_id'
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'fname'
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'lname'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'phone'
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'pass'
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: hash,
      beforeUpdate: hash
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Address, {
      foreignKey: 'userId'
    })
    User.hasOne(models.Cart, {
      foreignKey: 'userId'
    })
  };

  return User;
};