let connection = require("./../connection/connection1");
const sequelize  = require("sequelize");
const Employees =  require("../modle/Employees");

async function createTable(){
   await connection.sync({force: true});
   console.log("Table created")
   //insertEmployees();
}
//insrting single row data
async function insertEmployees(){
    await Employees.create(
    {
        id:1,
        name:"Daniel",
        email:"Nebuchadnezzar@gmail.com",
        password:"primeminister@342"
    }
    )
}
//createTable();

async function bulkInsertEmployees(){
    await Employees.bulkCreate(
    [{
       
        name:"Abraham",
        email:"FatherofJuda@gmail.com",
        password:"friendofgod@321"
    },
    {
       
        name:"David",
        email:"kingdavid@gmail.com",
        password:"writerofplsams@150"
    },
    {
       
        name:"Elijha",
        email:"secondcommingprophet@gmail.com",
        password:"chariottohevean@2kings"
    },
    {
       
        name:"Elisha",
        email:"Doubleportioin@gmail.com",
        password:"14greatmiricles@prophet"
    }

]
    )
}
bulkInsertEmployees();
