'use strict';
module.exports = (sequelize, DataTypes) => {
    const Detail = sequelize.define('Detail', {
        detailId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'detail_id'
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
    Detail.associate = function(models) {
        Detail.belongsTo(models.Product, {
            foreignKey: 'productId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return Detail;
};
