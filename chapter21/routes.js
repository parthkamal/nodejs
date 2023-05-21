const express = require('express');

const router = express.Router();

const User = require('./users');
const { mongo, default: mongoose } = require('mongoose');

//body parser for url-encoded for json data
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', (request, response) => {
    const message = 'hello from the server';
    res.json({ message });
});

router.get('/user', (request, response) => {
    User.find()
        .then((users) => {
            response.status(200).json({ users });
        })
        .catch((error) => {
            response.status(400).json({ error });
        });
})


router.post('/user', (request, response) => {
    const { name, email, address } = request.body;
    // console.log(request);

    User.findOne({ email }).then((user) => {
        const message = 'this email is already registered'
        console.log('found');
        if (user) response.status(400).json({ message });



    }).catch((error) => {
        console.log('catch');
        response.status(500).json({ error });
    })



    const newUser = new User({
        _id: new mongoose.Types.ObjectId,
        name,
        email,
        address
    })

    newUser.save().then((data, error) => {
        const message = 'user created successfully';
        if (data) response.status(200).json({ user: data, message });
        else {
            console.log('save');
            response.status(400).json({ error });
        }
    })
})


router.delete('/user/:id', (request, response) => {
    const { id } = request.params;
    User.deleteOne({ _id: id }).then((result) => {
        response.status(200).json({ result });
    }).catch((error) => {
        console.log({ error });
    })
})


router.put('/user/:id', (request, response) => {
    const { id } = request.params;
    const { name, email, address } = request.body;
    User.findOneAndUpdate({ _id: id }, { name, email, address }).then((result) => {
        response.status(200).json({ result });
    }).catch((error) => {
        response.status(400).json({ error });
    })
})


module.exports = router;