// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb98bcb32a1bed63744dd3f')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb96e284a7fed1ac4e2dbec')
  },{
    $set: {
      name:'Pankaj'
    },$inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result) =>{
    console.log(result);
  });



  // db.close();
});
