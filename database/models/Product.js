const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas";
    let cols = {
        productId: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productNombre: {
            type: dataTypes.STRING
        },
        productPrecio: {
            type: dataTypes.STRING
        },
        productDescripcion: {
            type: dataTypes.STRING
        },
        userId: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "userId"
        })
    }

    return Product;
}