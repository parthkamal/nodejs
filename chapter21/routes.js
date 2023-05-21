const express = require('express');

const router = express.Router();

const User = require('./users');


router.use(express.json());

router.get('/', (request, response) => {

    response.setHeader('Content-Type', 'application/json');
    const message = "hello from the mongodb server side"
    response.json({ message });

    User.find()
        .then((users) => {
            console.log('Users:', users);
        })
        .catch((error) => {
            console.error('Failed to retrieve users:', error);
        });

});


router.post('/login',(request, response) => {
    console.log(request.body);
    const user = request.body;
    // console.log(request);
    const message = 'login post api request';

    response.json({user});
})


module.exports = router;