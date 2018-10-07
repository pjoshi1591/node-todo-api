// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if(err){
    return console.log('unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err){
  //     return console.log('unable to insert Todos',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });
  // db.collection('Users').insertOne({
  //   name:'Pankaj',
  //   age:28,
  //   location:'Cali'
  // }, (err,result) =>{
  //   if(err){
  //     return console.log('unable to insert Users',err)
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
