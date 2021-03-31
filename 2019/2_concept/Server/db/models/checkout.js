'use strict';
module.exports = (sequelize, DataTypes) => {
    const Checkout = sequelize.define('Checkout', {
        checkoutId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'checkout_id'
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id'
        },
        products: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'products'
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: true,
            field: 'total'
        },
        address: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'address'
        },
        created: {
            type: 'TIMESTAMP',
            allowNull: false,
            field: 'created',
        },
        updated: {
            type: 'TIMESTAMP',
            allowNull: false,
            field: 'updated',
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'status'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Checkout.associate = function(models) {
        // associations can be defined here
        Checkout.belongsTo(models.User, {
            foreignKey: 'userId',
            constraints: false
        })
    };
    return Checkout;
};
