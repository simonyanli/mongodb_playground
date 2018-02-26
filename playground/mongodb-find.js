
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error, client) => {
    if (error) {
        throw error;
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Users').find({name:"Ye Zi"}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
    },(error) =>{
        console.log(error);
    });
});