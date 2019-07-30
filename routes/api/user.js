const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// User Model
const User = require('../../models/user');

// @route   GET api/user
// @desc    Get All Users
// @access  Public
router.get('/', (req, res) => {
    User.find()
        .sort({
            dateCreated: -1
        })
        .then(users => res.json(users));
});

// @route   POST api/user
// @desc    Signup A User
// @access  Public
router.post('/signup', (req, res) => {
    const {
        username,
        password,
        name
    } = req.body
    const newUser = new User({
        _id: new mongoose.Types.ObjectId,
        username,
        password,
        name
    });

    newUser
        .save()
        .then(user => res.json({
            message: 'User signed up',
            user
        }))
        .catch(error => res.json(error));
});

// @route   DELETE api/user/:id
// @desc    Delete A User
// @access  Public
router.delete('/:id', (req, res) => {
    //const id = mongoose.Types.ObjectId(req.params.id);
    const id = req.params.id;

    User.find({
            _id: id
        })
        .then(user => {
            User.findByIdAndDelete(user[0]._id).then(() => res.status(200).json({
                message: 'User deleted'
            }));
        })
        .catch(error => res.status(404).json({
            message: 'User not found'
        }));
})


module.exports = router;