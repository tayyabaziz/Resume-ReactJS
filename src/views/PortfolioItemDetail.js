import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import mediumZoom from "medium-zoom";
import iconBack from "../assets/icons/icon-back.svg";
const image011 = "/images/portfolio/image-011.jpg";
const image012 = "/images/portfolio/image-012.jpg";
const image021 = "/images/portfolio/image-021.jpg";
const image022 = "/images/portfolio/image-022.jpg";
const image023 = "/images/portfolio/image-023.jpg";
const image024 = "/images/portfolio/image-024.jpg";
const image031 = "/images/portfolio/image-031.jpg";
const image032 = "/images/portfolio/image-032.jpg";
const image033 = "/images/portfolio/image-033.jpg";
const image034 = "/images/portfolio/image-034.jpg";
const image035 = "/images/portfolio/image-035.jpg";
const image036 = "/images/portfolio/image-036.jpg";
const image037 = "/images/portfolio/image-037.jpg";
const image038 = "/images/portfolio/image-038.jpg";
const image041 = "/images/portfolio/image-041.jpg";
const image042 = "/images/portfolio/image-042.jpg";
const image051 = "/images/portfolio/image-051.jpg";
const image052 = "/images/portfolio/image-052.jpg";
const image053 = "/images/portfolio/image-053.jpg";
const image061 = "/images/portfolio/image-061.jpg";
const image071 = "/images/portfolio/image-071.jpg";
const image072 = "/images/portfolio/image-072.jpg";

const projects = {
  "daaman-design": {
    title: "Daaman Design",
    category: "PHP",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Daaman",
    url: "https://daamandesigns.com/",
    roles: "Web Designing, Development, Testing and Maintenance",
    description: (<div><p>Daaman Design is an e-Commerce system based on Custom PHP which was designed and developed by me while working at Viaduct Pvt. Ltd.</p><p>Its front end and back end is developed by me using HTML, CSS, jQuery client side and PHP for server side.</p></div>),
    metaDesc: "Daaman Design is an e-Commerce system based on Custom PHP which was designed and developed by me while working at Viaduct Pvt. Ltd. ",
    images: [image011, image012]
  },
  "happening-pk-organizer": {
    title: "Happening.PK Organizer App",
    category: "Android",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Happening PK",
    roles: "Api Development, App Designing and Development",
    description: (<p>Happening.PK Organizer application was developed for android devices. It was my first android project as a developer at Viaduct Pvt. Ltd. This project was started with no experience in development of android applications. I was able to learn many things while developing it.</p>),
    metaDesc: "Happening.PK Organizer application was developed for android devices. It was my first android project as a developer at Viaduct Pvt. Ltd. ",
    images: [image021, image022, image023, image024]
  },
  "happening-pk-app": {
    title: "Happening.PK App",
    category: "Android",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Happening PK",
    roles: "Api Development, App Designing and Development",
    description: (<p>Happening.PK application was developed for android devices. It was my second android project as a developer at Viaduct Pvt. Ltd. after the development of Organizer app for Happening.PK.</p>),
    metaDesc: "Happening.PK application was developed for android devices. It was my second android project as a developer at Viaduct Pvt. Ltd. after the development of Organizer app for Happening.PK.",
    images: [image031, image032, image033, image034, image035, image036, image037, image038]
  },
  "happening-pk": {
    title: "Happening.PK",
    category: "PHP",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Happening PK",
    url: "http://happening.pk/",
    roles: "Web Designing, Development, Testing and Maintenance",
    description: (<div><p>Happening.PK is the event discovery and ticketing platform which was designed and developed by me while working at Viaduct Pvt. Ltd.</p><p>It was converted from WordPress to the custom PHP. Its' front end and back end is developed by me using HTML, CSS, jQuery client side and PHP for server side. In it I also have written a algorithm for redirection which redirect the written url to the links of events or categories if found correctly.</p></div>),
    metaDesc: "Happening.PK is the event discovery and ticketing platform which was designed and developed by me while working at Viaduct Pvt. Ltd.",
    images: [image041, image042]
  },
  "forrun-co": {
    title: "Forrun.co",
    category: "PHP",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Forrun Co",
    url: "http://forrun.co/",
    roles: "Web Designing, Development, Testing, API Development and Maintenance",
    description: (<p>Forrun.co was one of my biggest achievement while working under Viaduct Pvt. Ltd. My role in it includes all the steps of software development life cycle. From planning to development to testing, deployment of project I was in it.Within this project I have developed many management system e.g. Rider Management, Order Management, Customer Management, Account Management, and etc. API was also developed by me for customers to place orders in forrun system or to track orders status.I also did create application for riders that tracks their location when they are online and return back it using PhoneGAP.</p>),
    metaDesc: "Forrun.co was one of my biggest achievement while working under Viaduct Pvt. Ltd. My role in it includes all the steps of software development life cycle. From planning to development to testing, deployment of project I was in it.",
    images: [image051, image052, image053]
  },
  "nkh-group": {
    title: "NKH Group",
    category: "Wordpress",
    client: "NKH Group",
    url: "https://nkhgroup.com.pk/",
    roles: "Theme Integration & Products Management",
    description: (<p>NKH Group website contains e-Commerce system based on Woo-commerce. My role was to install new theme and integrate it according to the clients' needs and manage WordPress Woo-commerce system.</p>),
    metaDesc: "NKH Group website contains e-Commerce system based on Woo-commerce. My role was to install new theme and integrate it according to the clients' needs and manage WordPress Woo-commerce system.",
    images: [image061]
  },
  "amber-batool": {
    title: "Amber Batool",
    category: "Wordpress",
    client: "Amber Batool",
    url: "http://www.amberbatool.com",
    roles: "WordPress Installation & Theme Integration",
    description: (<p>Amber Batool is an e-Commerce system based on Woo-commerce. My role in this project was to manage domain and cloud based hosting (Digital Ocean) with WordPress installation and theme integration in it to show features requested by the client.</p>),
    metaDesc: "Amber Batool is an e-Commerce system based on Woo-commerce. My role in this project was to manage domain and cloud based hosting (Digital Ocean) with WordPress installation and theme integration in it to show features requested by the client.",
    images: [image071, image072],
  }
};
function PortfolioItemDetail(data) {
  useEffect(() => {
    mediumZoom('[data-zoom]', {
      margin: 30
    });
  }, []);
  let projectData = projects[data.match.params.projectName];
  let images = [];
  projectData.images.forEach(element => {
    images.push(<div className="col-12 col-sm-6 col-md-4 py-2" key={element}><img className="rounded-lg img-fluid shadow" data-zoom src={element} alt={projectData.projectName} /></div>);
  });

  return (
    <React.Fragment>
      <Helmet>
        <title>{projectData.title} - Tayyab Aziz</title>
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content={projectData.title + " - Tayyab Aziz"} />
        <meta property="twitter:title" content={projectData.title + " - Tayyab Aziz"} />
        <meta name="description" content={projectData.metaDesc} />
        <meta name="og:description" content={projectData.metaDesc} />
        <meta name="twitter:description" content={projectData.metaDesc} />
      </Helmet>
      {/*PortfolioItemDetail*/}
      <div onClick={() => data.history.push("/portfolio/")} className="circle-back">
        <img src={iconBack} alt="" />
      </div>
      <div className="pb-2 text-center" id="hash">
        <h1 className="title title--h1 ">{projectData.title}
          <span className="title title--h5"> ({projectData.category}) </span>
        </h1>
      </div>
      <div className="pb-5">
        <div className="row">
          {projectData.projectUnder && <label className="col-12"><strong>Project Under: </strong>{projectData.projectUnder}</label>}
          {projectData.client && <label className="col-12"><strong>Client: </strong>{projectData.client}</label>}
          {projectData.url && <label className="col-12"><strong>Url: </strong><a href={projectData.url}>{projectData.url}</a></label>}
          {projectData.roles && <label className="col-12"><strong>Roles: </strong>{projectData.roles}</label>}
          {projectData.description && <div className="col-12">
            {projectData.description}
          </div>}
        </div>
        <div className="row">
          {images}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PortfolioItemDetail;