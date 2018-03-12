
const Express = require('express');
const bodyParse = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');




const app =new Express();

app.use(bodyParse.json());

app.post('/todos',async(req,res,next) =>{
try {
    let todo = await new Todo({
        text:req.body.text
    });
    
    const doc = await todo.save();
    res.send(doc);
}    
catch(error)
{
    res.status(400).send(error);
}


});

app.get('/todos',async(req,res) =>{
    try {
        const todos = await Todo.find();
        res.send({todos});
    }

    catch(e)
    {
        res.status(400).send(e);
    }
    
});


app.get('/todos/:id',async (req,res,next)=>{
    const id = req.params.id;


    try {
        const result = await Todo.findById(id);

        if(!result)
        {
            return res.status(400).send();
    
        }
    
        return res.send({result});
    
    }
    catch (e){
        res.status(400).send();
    }    
  
})

module.exports = {app}
