//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

var obj= new ObjectID();
console.log(obj);

/* MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) =>{
    if (error){
      return  console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp'); */

/*     db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    },(error,result) =>{
        if (error) {
            return console.log('Unable to insert todo',err);
        }

        console.log(JSON.stringify(result.ops,undefined,2))
    }); */

/*     db.collection('Users').insertOne({
        name:'Yi Xiu',
        age:5,
        location:'NZ'

    },(error,result) =>{
        if (error)
        {
            return console.log('Unable to connect to insert todo',error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close()
}) */