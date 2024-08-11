const {Sequelize, DataTypes} = require('sequelize');


const connector = new Sequelize('my_money', 'root', 'Avinash@123', {
    host : 'localhost',
    dialect : 'mysql',
    port: 3303
})

// console.log(connector)

// async function testConnection(){
//     try{
//         await connector.authenticate();
//         console.log("Connection Successfull")
//     }
//     catch(err){
//         console.log("Connection Failed", err)
//     }
// } 

// testConnection()

module.exports = connector