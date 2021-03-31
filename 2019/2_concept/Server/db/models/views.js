'use strict';
module.exports = (sequelize, DataTypes) => {
    const View = sequelize.define('View', {
        viewId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'view_id'
        },
        view: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            field: 'view'
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ip'
        },
        created: {
            type: 'TIMESTAMP',
            allowNull: false,
            field: 'created',
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
    View.associate = function(models) {
        View.belongsTo(models.Product, {
            foreignKey: 'productId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return View;
};
