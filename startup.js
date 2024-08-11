const async = require('async');
const connector = require('./db/connector_config');
const model_list = require('./db/model_list')

// function createConnectivity(){

async.series([(callback)=>{
    connector.authenticate().then(()=>{
        console.log("Connection Successfull")
         process.nextTick(callback, null)
    }).catch((err)=>{
        process.nextTick(callback, err)
    })
},(callback)=>{
    let tables = Object.keys(model_list)
    async.eachSeries(tables,  (table, callback)=>{
       user =  model_list[table](connector)
        process.nextTick(callback, null);
    }, (err)=>{
        process.nextTick(callback, err)
    })
}, (callback)=>{
    connector.sync().then(()=>{
        console.log("user table created successfully!");
        process.nextTick(callback, null)
        // user.create({
        //     name : 'aakash',
        //     password : 'aakash@123'
        // }).then((res)=>{
        //     console.log(res, 'insertion successfull')
        // }).catch((err)=>{
        //     console.log(err, 'error while inserting the data to user table')
        // })
    }).catch((error)=>{
       // console.log('Unable to create table : ', error)
       process.nextTick(callback, error)
    })
}], (err)=>{
    console.log(err)
})

