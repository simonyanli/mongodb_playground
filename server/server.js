const Koa = require('koa');
const bodyParse = require('koa-body');
const router = require('koa-router')();

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app =new Koa();

app.use(bodyParse());

/*app.post('/todos',(req,res) =>{
let todo = new Todo({
    text:req.body.text
});
todo.save().then((doc) =>{
    res.send(doc);
},(err) =>{
    res.statusCode(400).send(err);
});
});*/

/*router.post('/todos',async (ctx,next) =>{
   let todo = new Todo({
       text:ctx.request.body.text
   }) ;
    todo.save().then((doc) =>{
        ctx.body=doc;
    },(err) =>{
        ctx.message=err;
    });
    await next();
});*/

router.post('/todos',async (ctx,next) =>{
    let todo = new Todo({
        text:ctx.request.body.text
    });
    await todo.save().then((doc) =>{
        ctx.body = doc;
    },(err) =>{
        ctx.throw(400,err);
    });
    console.log("Success");
    await next();
});

app.use(router.routes());
app.listen(3000,() =>{
    console.log('Started on port 3000');
});