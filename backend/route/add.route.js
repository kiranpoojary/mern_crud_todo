const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 4000
const router = express.Router()
let Todo = require('../model/todo.model')
app.use(cors());
//app.use(bodyParser.json())

router.get('/', (req, res) => {
    Todo.find((err, data) => {
        if (!err) {
            res.json(data)
        } else {
            console.log(err);
        }
    })
})

router.get('/:id', (req, res) => {
    let id = req.params.id
    Todo.findById(id, (err, data) => {
        res.json(data)
    })
})


router.post('/add', (req, res) => {
    let todo = new Todo(req.body)
    todo.save()
        .then(todo => {

            res.status(200).json({ 'Todo': 'Todo added successfuly' })
        })
        .catch(err => {
            res.status(400).send("failed")
        })
})


router.post('/update/:id', (req, res) => {
    Todo.findById(req.params.id, (err, data) => {
        if (!data) {
            res, status(404).send("data not found")
        } else {
            data.description = req.body.description
            data.responsible = req.body.responsible
            data.priority = req.body.priority
            data.completed = req.body.completed
            data.save().then(Todo => {
                res.json("updated")
            }).catch(err => {
                res.status(400).send("update failed")
            })
        }
    })
})



router.post('/delete/:id', (req, res) => {
    Todo.deleteOne({ _id: req.params.id }, function (err, obj) {

    })
    // Todo.findById(req.params.id, (err, data) => {
    //     if (!data) {
    //         res, status(404).send("data not found")
    //     } else {
    //         data.description = req.body.description
    //         data.responsible = req.body.responsible
    //         data.priority = req.body.priority
    //         data.completed = req.body.completed
    //         data.save().then(Todo => {
    //             res.json("updated")
    //         }).catch(err => {
    //             res.status(400).send("update failed")
    //         })
    //     }
    // })
})



module.exports = router