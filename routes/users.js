const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router.get("/:id", (req, res) => {
    res.send(`Get User with ID ${req.params.id}`)
    console.log(req.body)
})

module.exports = router