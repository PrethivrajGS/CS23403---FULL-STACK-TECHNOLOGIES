//WITHOUT EJS
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
       <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
      #body
     {
    text-align: center;
    background-color: aqua;
     }
     .set{
      font-size: large;
      font-family: 'Times New Roman', Times, serif;
      background-color: aliceblue;
      text-align: center;
      align-items: center;
      }

        </style>
        <title>welcome</title>
        <div class=set>
        <form action="/submit-contact" method="POST">
           <label>Name:   </label>
           <input type="text" name="hello" id="lab1"><br>

           <label >Email:  </label>
           <input type="text" id="lab2" name="email"><br>
          
           <label >Subject:  </label>
           <input type="text" id="lab3" name="subject"><br>

           <label >Message</label>
           <textarea id="lab4" name="message"></textarea><br>

            <h3>prefered contact method</h3>
           <input type="radio"  name="rad" value="Email">
           <label for="lab5">Email</label><br>

           <input type="radio" name="rad" value="mobile-no">
           <label for="lab6">Phone.no</label><br>
           <button id="submit">SUBMIT</button>
        </form>
        </div>
      </head>
</html>
        `);
});
app.post('/submit-contact',(req,res)=>{
    const {hello,email,subject,message,rad} =req.body;
    res.send(`
         <!DOCTYPE html>
    <html>
    <head>
    <style>
   #body
     {
    text-align: center;
    background-color: aqua;
     }
     .set{
      font-size: 35px;
      font-family: 'Times New Roman', Times, serif;
      background-color: lightgrey;
      text-align: center;
      align-items: center;
      }
    </style>
    </head>
    <body>
    <div id="actions">
    <form action="/" method="POST">
    <h3>Form Submitted</h3>
    <p><strong>Name:</strong> ${hello}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Preferred Contact Method:</strong> ${rad}</p>
    <button>GO BACK</button>
    </div>
    </body>
    </html>`)
})

app.post('/',(req,res)=>{
    res.send(`
        <!DOCTYPE html>
       <html lang="en">
       <head>
         <style>
       #body
      {
     text-align: center;
     background-color: aqua;
      }
      .set{
       font-size: large;
       font-family: 'Times New Roman', Times, serif;
       background-color: aliceblue;
       text-align: center;
       align-items: center;
       }
 
         </style>
         <title>welcome</title>
         <div class=set>
         <form action="/submit-contact" method="POST">
            <label>Name:   </label>
            <input type="text" name="hello" id="lab1"><br>
 
            <label >Email:  </label>
            <input type="text" id="lab2" name="email"><br>
           
            <label >Subject:  </label>
            <input type="text" id="lab3" name="subject"><br>
 
            <label >Message</label>
            <textarea id="lab4" name="message"></textarea><br>
 
             <h3>prefered contact method</h3>
            <input type="radio"  name="rad" value="Email">
            <label for="lab5">Email</label><br>
 
            <input type="radio" name="rad" value="mobile-no">
            <label for="lab6">Phone.no</label><br>
            <button id="submit">SUBMIT</button>
         </form>
         </div>
       </head>
 </html>
         `);
    });
app.listen(3009, () => {
    console.log('Server is running on http://localhost:3009');
});
