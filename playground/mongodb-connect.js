//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connet to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    /*db.collection('Todos').insertOne(({
        text: 'Something to do',
        completed: false
    }), (err, result) => {
        if(err){
            return console.log('Unable to insert todo.', err);
        }
        
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/

    /*db.collection('Users').insertOne(({
        name: 'Dávid',
        age: 22,
        location: 'Sopron'
    }), (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });*/



    db.close();
});