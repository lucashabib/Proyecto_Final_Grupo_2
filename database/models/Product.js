//CREE UNA ESTRUCTURA BASICA DE ESTE MODELO PORQUE SINO NO PODIA TRABAJAR CON LA DE USER

module.exports = function(sequelize, DataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.FLOAT
        }
    };

    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    };

    return sequelize.define(alias, cols, config);
};
