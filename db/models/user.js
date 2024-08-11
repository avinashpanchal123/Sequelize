const {DataTypes} = require('sequelize')
module.exports = (connector)=>{
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
    return user
}
