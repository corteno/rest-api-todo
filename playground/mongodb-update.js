//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connet to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    /*db.collection('Todos').findOneAndUpdate({
     _id: new ObjectID('58ee18ba85a16669380dc4bf')
     }, {
     $set: {
     completed: true
     }
     }, {
     returnOriginal: false
     })
     .then((result) => {
     console.log(result);
     });*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58ecca468103060d48af1c7e')
    }, {
        $set: {
            name: 'David'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
        .then((result) => {
            console.log(result);
        });

    //db.close();
});