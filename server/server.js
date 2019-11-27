import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import express from "express";
import axios from "axios";
import cors from "cors";
import compression from "compression";
import "./db.config";

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const PORT = process.env.PORT || 3000;
const app = express();
app.use(compression());

const errorRenderer = (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred");
        }
        data = data.replace(
            new RegExp("Tayyab Aziz - A Full Stack Web Developer and Gamer", "gi"), "404 - Tayyab Aziz"
        )
        return res.status(404).send(data);
    });
};

app.use((req, res, next) => {
    res.set("X-Frame-Options", "SAMEORIGIN");
    res.set("X-XSS-Protection", "1; mode=block");
    next();
});

app.use("/sitemap.html", errorRenderer);
app.use(express.static(path.resolve(__dirname, "..", "build"), {
    maxAge: "30d", setHeaders: function (res, path) {
        res.setHeader("Cache-Control", "max-age=2592000");
        res.setHeader("Expires", new Date(Date.now() + 2592000 * 1000).toUTCString());
    }
}));

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf8", async (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred");
        }
        const pathname = req.path.replace(/\//g, "");
        const fullUrl = process.env.PUBLIC_URL + req.originalUrl;

        data = data.replace(
            new RegExp(process.env.PUBLIC_URL + "//", "gi"), fullUrl
        );
        switch (pathname) {
            case "":
                data = data.replace(
                    new RegExp("Tayyab Aziz - A Full Stack Web Developer and Gamer", "gi"), "Tayyab Aziz - A Full Stack Web Developer and Gamer"
                );
                data = data.replace(
                    new RegExp("Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun.", "gi"), "Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun."
                );
                break;
            case "resume":
                data = data.replace(
                    new RegExp("Tayyab Aziz - A Full Stack Web Developer and Gamer", "gi"), "RESUME - Tayyab Aziz"
                );
                data = data.replace(
                    new RegExp("Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun.", "gi"), "Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun."
                );
                break;
            case "portfolio":
                data = data.replace(
                    new RegExp("Tayyab Aziz - A Full Stack Web Developer and Gamer", "gi"), "PORTFOLIO - Tayyab Aziz"
                );
                data = data.replace(
                    new RegExp("Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun.", "gi"), "Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun."
                );
                break;
            default:
                if (req.params.projectName) {
                    try {
                        const url = req.protocol + "://" + req.get("host") + "/api/project/" + req.params.projectName;
                        const responseData = await axios(url);
                        data = data.replace(
                            new RegExp("Tayyab Aziz - A Full Stack Web Developer and Gamer", "gi"), responseData.data.title + " - Tayyab Aziz"
                        );
                        data = data.replace(
                            new RegExp("Full Stack Web Developer from Karachi, Pakistan having an experience of more than 5 years.Also a Gamer who wants to learn games development for fun.", "gi"), responseData.data.metaDesc
                        );
                    }
                    catch (err) {
                        console.log(err.message);
                        data = data.replace(
                            new RegExp("Tayyab Aziz - A Full Stack Web Developer and Gamer", "gi"), "404 - Tayyab Aziz"
                        );
                        return res.status(404).send(data);
                    }
                }
                break;
        }
        return res.send(data);
    });
};

app.all("*", (req, res, next) => {
    res.header("Cache-Control", "max-age=3600000");
    res.header("Expires", new Date(Date.now() + 3600000).toUTCString());
    next();
});
app.get("/", serverRenderer);
app.get("/resume", serverRenderer);
app.get("/portfolio", serverRenderer);
app.get("/portfolio/:projectName", serverRenderer);
app.get("/sitemap(/?)", (req, res, next) => {
    fs.readFile(path.resolve("./build/sitemap.html"), "utf8", async (err, data) => {
        data = data.replace(
            new RegExp("%PUBLIC_URL%", "gi"), process.env.PUBLIC_URL
        );
        return res.send(data);
    });
});

app.use(cors());

app.all("/api/*", (req, res, next) => {
    res.header("Cache-Control", "max-age=0");
    res.header("Expires", new Date(Date.now() + 0).toUTCString());
    next();
});

app.get("/api", (req, res) => {
    res.json({ status: 200, message: "Service is OK." });
});
app.use("/api/project", require("./projects.route"));
app.use("/api/detail", require("./details.route"));
app.all("/api/*", (req, res) => {
    res.status(404).json("Page not Found.");
});

app.all("*", errorRenderer);

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`);
});