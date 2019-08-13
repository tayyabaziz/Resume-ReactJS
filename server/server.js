import path from 'path';
import fs from 'fs';
import express from "express";
import axios from "axios";
import("./db.config");

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
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
                    const url = req.protocol + '://' + req.get('host') + "/api/project/" + req.params.projectName;
                    axios.get(url).then(response => {
                        data = data.replace(
                            new RegExp("@page_title", 'gi'), response.data.title + " - Tayyab Aziz"
                        )
                        data = data.replace(
                            new RegExp("@page_description", 'gi'), response.data.metaDesc
                        )
                        return res.send(data)
                    })
                }
                break;
        }
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
    res.end()
})
app.use('/api/project', routes)
app.all('/api/*', (req, res) => {
    res.json({ status: 404, message: 'Page not Found.' })
    res.end()
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