'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'product_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'price'
    },
    basePrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'base_price'
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_id'
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
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Admin, {
      foreignKey: 'adminId',
      constraints: false
    })
    Product.hasMany(models.Quantity, {
      foreignKey: 'productId'
    })
    Product.hasMany(models.Image, {
      foreignKey: 'productId'
    })
    Product.hasMany(models.Spec, {
      foreignKey: 'productId'
    })
    Product.hasMany(models.Detail, {
      foreignKey: 'productId'
    })
    Product.hasMany(models.View, {
      foreignKey: 'productId'
    })
  };
  return Product;
};
