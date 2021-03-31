'use strict';
module.exports = (sequelize, DataTypes) => {
    const Quantity = sequelize.define('Quantity', {
        quantityId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'quantity_id'
        },
        quantity: {
            type: DataTypes.STRING,
            default: 0.00,
            field: 'quantity'
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
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'product_id'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Quantity.associate = function(models) {
        Quantity.belongsTo(models.Product, {
            foreignKey: 'productId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return Quantity;
};
