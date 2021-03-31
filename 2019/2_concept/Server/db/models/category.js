'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            field: 'category_id'
        },
        name: {
            type: DataTypes.STRING(150),
            primaryKey: true,
            allowNull: false,
            field: 'name'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Category.associate = function(models) {
        Category.hasMany(models.Subcategory, {
            foreignKey: 'categoryName'
        })
    };
    return Category;
};
