'use strict';
module.exports = (sequelize, DataTypes) => {
    const WatchMarket = sequelize.define('WatchMarket', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'url'
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'company'
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'product_name'
        },
        selectorProductPrice: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'selector_product_price'
        },
        productPrice: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'product_price'
        },
        selectorProductImage: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'selector_product_image'
        },
        ProductImage: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'product_image'
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
    WatchMarket.associate = function(models) {
    };
    return WatchMarket;
};
