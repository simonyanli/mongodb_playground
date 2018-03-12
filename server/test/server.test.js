
const  {app} = require('./../app');
const {Todo} = require('./../models/todo');
const request = require('supertest');
const {ObjectId} = require('mongodb');

const todos = [{
    _id: new ObjectId(),
    text:'First test todo'
},{
    _id: new ObjectId(),
    text:'Second test todo'
}]

beforeEach(async ()=>{
     await Todo.remove({});
     await Todo.insertMany(todos);

});

describe('POST/todos',()=>{
    test('it should add new todos in the mongodb',async() =>{
      const text = 'Test todo text';
       try{
        const response = await request(app).post('/todos').send({text});
        expect(response.status).toBe(200);
        expect(response.body.text).toBe(text);
        
        const result = await Todo.find({text});
        expect(result.length).toBe(1);
        expect(result[0].text).toBe(text);
          }
       catch(e)
    {
        throw e;
    }

    });

    test('it should test the error response of this post api',async()=>{
        try {
            const response = await request(app).post('/todos').send({});
            expect(response.status).toBe(400);
            const result = await Todo.find();
            expect(result.length).toBe(2);
        }
        catch (e) {
          throw e;
        }
    });

});

describe('get/todos',()=>{
    test('it should test the GET api',async ()=>{
        try{
            const response = await request(app).get('/todos');
            expect(response.status).toBe(200);
            expect(response.body.todos.length).toBe(2);
           
        }
        catch (e)
        {
            throw e;
        }
    })
  

});

describe('get/todos/:id',()=>{
    test('it should return the todos by the id',  (done)=>{

        // try {
        //     const response = await request(app).get(`/todos/${todos[0]._id.toHexString()}`);
        //     expect(response.status).toBe(200);
        //     expect(response.body.todo.text).toBe(todos[0].text);
        // }
        // catch (e)
        // {
        //     throw e;
        // }

        request(app).get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.text).toBe(todos[0].text);
        })
        .end(done);

    })
});
