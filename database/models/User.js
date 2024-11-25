module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "userId"
        })
    }

    return User;
}