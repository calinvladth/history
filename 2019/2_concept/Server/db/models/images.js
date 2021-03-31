'use strict';
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        imageId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'image_id'
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image'
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
    Image.associate = function(models) {
        Image.belongsTo(models.Product, {
            foreignKey: 'productId',
            constraints: true,
            onDelete: 'cascade'
        })
    };
    return Image;
};
