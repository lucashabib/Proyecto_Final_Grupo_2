module.exports =  function(sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        nombre : {
            type : dataTypes.STRING
        },
        email : {
            type : dataTypes.STRING
        },
        contrasena : {
            type : dataTypes.STRING
        },
    };

    let config = {
        tableName : "users",
        timestamps : false,
        underscored : true
    }

    let User = sequelize.define(alias, cols, config);

    return User;
    
}