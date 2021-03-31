'use strict';
module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define('Subcategory', {
        subcategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            field: 'subcategory_id'
        },
        name: {
            type: DataTypes.STRING(150),
            primaryKey: true,
            allowNull: false,
            field: 'name'
        },
        categoryName: {
            type: DataTypes.STRING(150),
            allowNull: false,
            field: 'category_name'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Subcategory.associate = function(models) {
        Subcategory.belongsTo(models.Category, {
            foreignKey: 'categoryName',
            constraints: true,
            onUpdate: 'cascade',
            onDelete: 'cascade'
        })
    };
    return Subcategory;
};
