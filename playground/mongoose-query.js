const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// const id = '5bf6a6118578791f48d6db3b';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// })
//     .then((todos) => {
//         console.log('Todos', todos);
//     });

// Todo.findOne({
//     _id: id
// })
//     .then((todo) => {
//         console.log('Todo', todo);
//     });

// Todo.findById(id)
//     .then((todo) => {
//         console.log('Todo by id', todo);
//     })
//     .catch((err) => console.log(err));