const express = require('express')
const app = express()
const PORT = 4500
const mustacheExpress=require('mustache-express')
const bodyParser=require('body-parser')
const path = require('path') // allows reference to other pages

const VIEWS_PATH = path.join(__dirname, '/views')

app.use('/css', express.static('css'))



//tell the app to use the engine for template viewing and running. 
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
// set the views by what they are and where they are.
app.set('views', VIEWS_PATH)
// set the engine and the template type being used
app.set('view engine', 'mustache')

// url encoded set to false so objects cannot be passed in the input field and to the network
app.use(bodyParser.urlencoded({extended : false}))


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

    res.status(200).send()
})


app.listen(PORT, ()=>{
    console.log(PORT)
})