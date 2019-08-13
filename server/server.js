import path from 'path';
import dotenv from "dotenv";
import fs from 'fs';
import express from "express";
import cors from "cors";
import compression from "compression";
import axios from "axios";
import "./db.config";

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(compression());
const router = express.Router();

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', async (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        const pathname = req.path.replace(/\//g, "");
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        data = data.replace(
            new RegExp("@public_url", 'gi'), req.protocol + '://' + req.get('host')
        )

        data = data.replace(
            new RegExp("@page_url", 'gi'), fullUrl
        )
        switch (pathname) {
            case "":
                data = data.replace(
                    new RegExp("@page_title", 'gi'), "Tayyab Aziz - A Full Stack Web Developer and Gamer"
                )
                data = data.replace(
                    new RegExp("@page_description", 'gi'), "Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun."
                )
                break;
            case "resume":
                data = data.replace(
                    new RegExp("@page_title", 'gi'), "RESUME - Tayyab Aziz"
                )
                data = data.replace(
                    new RegExp("@page_description", 'gi'), "Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun."
                )
                break;
            case "portfolio":
                data = data.replace(
                    new RegExp("@page_title", 'gi'), "PORTFOLIO - Tayyab Aziz"
                )
                data = data.replace(
                    new RegExp("@page_description", 'gi'), "Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun."
                )
                break;
            default:
                if (req.params.projectName) {
                    try {
                        const url = req.protocol + '://' + req.get('host') + "/api/project/" + req.params.projectName;
                        const responseData = await axios(url);
                        data = data.replace(
                            new RegExp("@page_title", 'gi'), responseData.data.title + " - Tayyab Aziz"
                        )
                        data = data.replace(
                            new RegExp("@page_description", 'gi'), responseData.data.metaDesc
                        )
                    }
                    catch(err) {
                        console.log(err.message)
                        data = data.replace(
                            new RegExp("@page_title", 'gi'), "404 - Tayyab Aziz"
                        )
                        return res.status(404).send(data)
                    }
                }
                break;
        }
        return res.send(data);
    })
}

router.use(
    express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

app.get('/', serverRenderer)
app.use(router)
app.get('/resume', serverRenderer)
app.get('/portfolio', serverRenderer)
app.get('/portfolio/:projectName', serverRenderer)
var routes = require('./projects.route')
app.get('/api', (req, res) => {
    res.json({ status: 200, message: 'Service is OK.' })
})
app.use('/api/project', routes)
app.all('/api/*', (req, res) => {
    res.status(404).json('Page not Found.')
})

app.all('*', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        data = data.replace(
            new RegExp("@page_title", 'gi'), "404 - Tayyab Aziz"
        )
        return res.status(404).send(data)
    })
})

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`);
});