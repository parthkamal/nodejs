const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});


router.get('/about', (req, res, next) => {
    // res.sendFile(__dirname + '/html/about.html');
    res.render('about')
});


router.get('/service', (req, res) => {
    // res.sendFile(__dirname + '/html/service.html');
    res.render('service');
});

router.get('/user/:title', (req, res) => {
    console.log(req.params);
    const {title} = req.params; 
    res.render('user', { title });
})



module.exports = router;
