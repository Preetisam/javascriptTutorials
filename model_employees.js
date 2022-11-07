let sequelizeInstance = require("../connection/connection1");
const sequelize = require("sequelize");

let Employees = sequelizeInstance.define("Employees",
{
    id:{
        type:sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: sequelize.DataTypes.STRING,
        allowNull: false
    },
}, 
    {
        timestamps: false
    }
  
);


module.exports = Employees;
