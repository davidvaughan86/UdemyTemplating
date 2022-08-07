const express = require('express')
const app = express()
const PORT = 4500
const mustacheExpress=require('mustache-express')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended : false}))


//tell the app to use the engine for template viewing and running. 
app.engine('mustache', mustacheExpress())
// set the views by what they are and where they are.
app.set('views', './views')
// set the engine and the template type being used
app.set('view engine', 'mustache')




app.get('/' , (req,res) =>{
    const user = {name: 'david', age: 36}
    //we use render when showing templates by using the method and instering the name of the view we are rendering
    res.render('index', {user: user})
    // we use double curley bracers to display the key which is the data we pass in from the javascript to the template
})

app.get('/users' , (req, res) => {
    const users = [
        {name: 'david', 
            address: {
                        streetnumber:'1206',
                        street: 'Memorial Dr. SE',
                        city: 'Atlanta',
                        state: 'GA'}
                    },
        {name: 'Patrick', 
            address: {
                        streetnumber:'141',
                        street: 'South Ave',
                        city: 'Forest Park',
                        state: 'GA'}
                    },
        {name: 'Diana', 
            address: {
                        streetnumber:'4452',
                        street: 'Challedon Drive',
                        city: 'Fairburn',
                        state: 'GA'}}
                ]
        res.render('users', {users: users})
            
        
        
})

app.get ('/person' , (req, res) => {
    let person = []
    res.render('person', person)
})

app.get('/add-user' ,(req,res) => {
    res.render('add-user')
})
app.post('/add-user' ,(req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    console.log(name)
    console.log(age)
    // if(name.length > 0) {
    //     res.render('add-user', { name : req.body})
    // }
    res.status(200).send()
})


app.listen(PORT, ()=>{
    console.log(PORT)
})