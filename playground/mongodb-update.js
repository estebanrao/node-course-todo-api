const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Conected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID('5bf565723f06ca4e8ae756f4')
        }, {
            $set: {
                name: 'Tebo Rao'
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

    // client.close();
})