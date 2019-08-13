import express from "express";
import projectModel from "./project.model";
const router = express.Router()

router.get('/', (req, res) => {
    projectModel.find().exec((err, data) => {
        if (err) {
            res.status(500).json("Error Occured")
        } else {
            if (data === undefined || data === null || data.length === 0) {
                res.status(404).json("Projects Not Found")
            } else {
                res.status(200).json(data)
            }
        }
    })
})
router.get('/:projectName', (req, res) => {
    projectModel.findOne().where("projectName", req.params.projectName).exec((err, data) => {
        if (err) {
            res.status(500).json("Error Occured")
        } else {
            if (data === undefined || data === null || data.length === 0) {
                res.status(404).json("Projects Not Found")
            } else {
                res.status(200).json(data)
            }
        }
    })
})

module.exports = router
