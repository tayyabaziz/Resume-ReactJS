import express from "express";
import detailModel from "./detail.model";
const router = express.Router();

router.get("/:type", (req, res) => {
    detailModel.findOne().where("type", req.params.type).exec((err, data) => {
        if (err) {
            res.status(500).json("Error Occured");
        } else {
            if (data === null || data.length === 0) {
                res.status(404).json("Details Not Found");
            } else {
                res.status(200).json(data);
            }
        }
    });
});

router.get("/:type/:specific", (req, res) => {
    detailModel.findOne().select(req.params.specific).where("type", req.params.type).exec((err, data) => {
        if (err) {
            res.status(500).json("Error Occured");
        } else {
            if (data === null || data.length === 0) {
                res.status(404).json("Details Not Found");
            } else {
                res.status(200).json(data);
            }
        }
    });
});

module.exports = router;