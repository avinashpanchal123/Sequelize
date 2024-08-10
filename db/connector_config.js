const Sequelize = require('sequelize');

const connector = new Sequelize('my_money', 'root', 'Avinash@123', {
    host : 'localhost',
    dialect : 'mysql',
    port: 3303
})


connector.authenticate().then(()=>{
    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err, 'Connection Failed')
})


