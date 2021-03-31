'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        cartId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'cart_id'
        },
        products: {
            type: DataTypes.JSON,
            allowNull: false,
            field: 'products'
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
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
    Cart.associate = function(models) {
        // associations can be defined here
        Cart.belongsTo(models.User, {
            foreignKey: 'userId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return Cart;
};
