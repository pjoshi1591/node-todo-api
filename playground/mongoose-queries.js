const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

// var id = '5bbbf8550bb2e63c39aea89011';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id',todo);
// }).catch((e) => console.log(e));
var id = '5bbac8a47b9e9bd01b05518a';

User.find({
  _id:id
}).then((user) =>{
  console.log('User',user);
});

User.findOne({
  _id:id
}).then((user) =>{
  console.log('User',user);
});

User.findById(id).then((user) =>{
  if(!user) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
