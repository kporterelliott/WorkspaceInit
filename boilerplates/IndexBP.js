process.title = "Your New App"

const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')
const morgan = require('morgan');
const JSONdata = require('./public/JSON/database.json')


let comments = JSONdata.comments
console.log('outside locals', ejs.locals)
// config app (app.use)--------------------//

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'))


//Routes go under here:-----------------//

app.get('/', (req, res)=>{    
    res.render('home')
})
//
//
app.post('/database.json', (req, res) =>{
    JSONdata.comments.push(req.body)
    console.log('req.body=', req.body)
    // click lister handles route!!!!!//
})


app.get('/allComments', (req, res) => {
    // console.log('Req.query:', req.query);
    // console.log(comments)
    // console.log('inside allComments Node:', ejs.locals)
    let searchName = req.query['username'];
    for (i in comments){
        let commentObj = comments[i];
        if (searchName == commentObj.username ){
            commentObj.active = true;
            // console.log(commentObj)
        }
        else {
            commentObj.active = false
        }
    }
    console.log(comments)
    res.render('allComments', {comments})
})

app.delete('/allComments', (req, res)=>{
    
    console.log("COMMENTS before:", comments)
    comments = comments.filter((el)=>el.active != true)
    console.log("COMMENTS after:", comments)
    res.send(comments)
    
})

// app.post('/allComments', (req, res) =>{
//     res.send('im a turd')
// })

// app.patch('/allComments/edit', (req, res)=>{
//     console.log('PATCHED!')
//     res.render('allComments')
// })




// Express Listener ***MUST COME LAST!!!!**** ------------// 

app.listen(3000, ()=>{
    console.log ('LISTENING ON PORT 3000')
})
