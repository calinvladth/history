'use strict';
const bcrypt = require('bcrypt')

function hash (user, options) {
    const SALT_FACTOR = 8
    return bcrypt
        .genSalt(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.pass, salt, null))
        .then(hash => {
            user.setDataValue('pass', hash)
        })
}


module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        adminId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'admin_id'
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
    Admin.associate = function(models) {
        Admin.hasMany(models.Product, {foreignKey: 'productId'})
    };


    return Admin;
};