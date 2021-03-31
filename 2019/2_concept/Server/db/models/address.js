'use strict';
module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        addressId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'address_id'
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'address1'
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'address2'
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'city'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Address.associate = function(models) {
        // associations can be defined here
        Address.belongsTo(models.User, {
            foreignKey: 'userId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return Address;
};
