const express= require('express')
const bodyparser= require('body-parser')
 const app = express();

 app. use(bodyparser.urlencoded({extended:false}));

 app.set('view engine','ejs');

 const username= 'gsp';
 const password ='1234';

 app.get('/',(req,res)=>
{
    res.render('login',{error :null});
});

app.post('/login',(req,res)=>
{
    const {user,pass} = req.body;
    if(user === username && pass === password)
    {
        res.render('welcome',{user});
    }
    else
    {
       res.render('login',{error : 'invalid credentials'});
    }
});
app.listen(3090,()=>
{
    console.log('server running on http://localhost:3090');
});