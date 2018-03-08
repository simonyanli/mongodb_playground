
const  {app} = require('./../app');
const {Todo} = require('./../models/todo');
const request = require('supertest');

beforeEach((done)=>{
    Todo.remove({}).then(()=>done());
});

describe('POST/todos',()=>{
    test('it should add new todos in the mongodb',async() =>{
      const text = 'Test todo text';
       try{
        const response = await request(app).post('/todos').send({text});
        expect(response.status).toBe(200);
        expect(response.body.text).toBe(text);
        
        const todos = await Todo.find();
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
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
            const todos = await Todo.find();
            expect(todos.length).toBe(0);
        }
        catch (e) {
          throw e;
        }
    });

});
