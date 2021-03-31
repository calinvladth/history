'use strict';
module.exports = (sequelize, DataTypes) => {
    const Spec = sequelize.define('Spec', {
        specId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'spec_id'
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'text'
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
    Spec.associate = function(models) {
        Spec.belongsTo(models.Product, {
            foreignKey: 'productId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return Spec;
};
