const {Sequelize, DataTypes} = require('sequelize');

module.exports = (connector)=>{
    const category = connector.define('category',{
        name:{
            type: DataTypes.STRING(100)
        }
    })
    return 
}