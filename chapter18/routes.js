const express = require('express');


const router = express.Router();

// router.get('/', (req, res) => {
//   });


router.get('/about',(req,res,next)=> {
    res.sendFile(__dirname+'/html/about.html');
});



router.get('/service',(req,res)=> {
    res.sendFile(__dirname+'/html/service.html');
});



module.exports = router;