const express = require('express');
const app = express();

app.set('view engine','ejs');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('index', {title:'Home'})
})

router.get('/projects',(req,res,next)=>{
    res.render('projects', {title:'Projects'})
})


router.get('/about',(req,res,next)=>{
    res.render('about', {title:'About'})
})


router.get('/contact',(req,res,next)=>{
    res.render('contact', {title:'Contact'})
})


router.get('/services',(req,res,next)=>{
    res.render('services', {title:'Services'})
})

module.exports = router;