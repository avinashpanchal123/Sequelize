const {Sequelize, DataTypes} = require('sequelize');


const connector = new Sequelize('my_money', 'root', 'Avinash@123', {
    host : 'localhost',
    dialect : 'mysql',
    port: 3303
})

// console.log(connector)
connector.authenticate().then(()=>{
    console.log("Connection Successfull")
}).catch((err)=>{
    console.log(err, 'Connection Failed')
})

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

const user = connector.define('user',{
    name : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    password : {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})


connector.sync().then(()=>{
    // console.log("user table created successfully!")
    user.create({
        name : 'avinash',
        password : 'avinash@123'
    }).then((res)=>{
        console.log(res, 'insertion successfull')
    }).catch((err)=>{
        console.log(err, 'error while inserting the data to user table')
    })
}).catch((error)=>{
    console.log('Unable to create table : ', error)
})