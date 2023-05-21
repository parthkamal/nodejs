const express = require('express');
const User = require('./users');
const mongoose = require('mongoose');
const router = express.Router();
const crypto = require('crypto');

router.use(express.urlencoded({extended: false}));
router.use(express.json());

const key = 'password';
const algo = 'aes256';


router.post('/register',(request, response )=> {
    const {name, email, password, address} = request.body;

    console.log({name, email, password, address});

    const cipher = crypto.createCipher(algo,key);
    const encrypted = cipher.update(password,'utf-8','hex');
    console.log(encrypted);
    response.status(200).json({encrypted});

})


module.exports = router;