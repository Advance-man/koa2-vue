const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING(255),
    password:Sequelize.STRING(255),
    createAt:Sequelize.BIGINT,
    groupId:Sequelize.INTEGER
},
{
    freezeTableName: false,
    timestamps:false
});

Users.sync({
    force: true
})

module.exports = Users;