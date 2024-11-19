module.exports = function(sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
    };

    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true
    };

    return sequelize.define(alias, cols, config);
};
