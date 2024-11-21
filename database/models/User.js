module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
    }, {
        tableName: "users",
        timestamps: false,
        underscored: true
    });

    return User;
};

