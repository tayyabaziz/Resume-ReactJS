import path from 'path';
import fs from 'fs';
import express from "express";
import ReactDOMServer from "react-dom/server";

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router()

const projects = {
    "daaman-design": {
        title: "Daaman Design",
        metaDesc: "Daaman Design is an e-Commerce system based on Custom PHP which was designed and developed by me while working at Viaduct Pvt. Ltd. "
    },
    "happening-pk-organizer": {
        title: "Happening.PK Organizer App",
        metaDesc: "Happening.PK Organizer application was developed for android devices. It was my first android project as a developer at Viaduct Pvt. Ltd. "
    },
    "happening-pk-app": {
        title: "Happening.PK App",
        metaDesc: "Happening.PK application was developed for android devices. It was my second android project as a developer at Viaduct Pvt. Ltd. after the development of Organizer app for Happening.PK."
    },
    "happening-pk": {
        title: "Happening.PK",
        metaDesc: "Happening.PK is the event discovery and ticketing platform which was designed and developed by me while working at Viaduct Pvt. Ltd."
    },
    "forrun-co": {
        title: "Forrun.co",
        metaDesc: "Forrun.co was one of my biggest achievement while working under Viaduct Pvt. Ltd. My role in it includes all the steps of software development life cycle. From planning to development to testing, deployment of project I was in it."
    },
    "nkh-group": {
        title: "NKH Group",
        metaDesc: "NKH Group website contains e-Commerce system based on Woo-commerce. My role was to install new theme and integrate it according to the clients' needs and manage WordPress Woo-commerce system.",
    },
    "amber-batool": {
        title: "Amber Batool",
        metaDesc: "Amber Batool is an e-Commerce system based on Woo-commerce. My role in this project was to manage domain and cloud based hosting (Digital Ocean) with WordPress installation and theme integration in it to show features requested by the client."
    }
};

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
                    const project = projects[req.params.projectName];
                    if (project) {
                        data = data.replace(
                            new RegExp("@page_title", 'gi'), project.title + " - Tayyab Aziz"
                        )
                        data = data.replace(
                            new RegExp("@page_description", 'gi'), project.metaDesc
                        )
                    }
                }
                break;
        }

        const html = ReactDOMServer.renderToString(data)
        return res.send(data.replace(html))
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
app.all('*', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }
        data = data.replace(
            new RegExp("@page_title", 'gi'), "404 - Tayyab Aziz"
        )
        return res.status(404).send(
            data.replace(
                ReactDOMServer.renderToString(data)
            )
        )
    })
})

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`);
});