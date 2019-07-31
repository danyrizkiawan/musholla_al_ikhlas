const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Child Model
const Child = require("../../models/child");

// @route   GET api/children
// @desc    Get All Children
// @access  Public
router.get("/", (req, res) => {
    Child.find()
        .sort({
            dateCreated: -1
        })
        .then(children => res.json(children));
});

// @route   POST api/children/add
// @desc    Add child
// @access  Public
router.post("/add", (req, res) => {
    const newChild = new Child({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    });

    newChild
        .save()
        .then(child =>
            res.json({
                message: "Child Added",
                child
            })
        )
        .catch(error => res.json(error));
});

// @route   DELETE api/child/:id
// @desc    Delete A Child
// @access  Public
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Child.find({
            _id: id
        })
        .then(child => {
            Child.findByIdAndDelete(child[0]._id).then(() =>
                res.status(200).json({
                    message: "Child deleted"
                })
            );
        })
        .catch(error =>
            res.status(404).json({
                message: "Child not found"
            })
        );
});

module.exports = router;