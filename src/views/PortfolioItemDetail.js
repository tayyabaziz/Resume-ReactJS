import React, { useEffect } from "react";
import mediumZoom from "medium-zoom";
import image011 from "../file/portfolio/image-011.jpg";
import image012 from "../file/portfolio/image-012.jpg";
import image021 from "../file/portfolio/image-021.jpg";
import image022 from "../file/portfolio/image-022.jpg";
import image023 from "../file/portfolio/image-023.jpg";
import image024 from "../file/portfolio/image-024.jpg";
import image031 from "../file/portfolio/image-031.jpg";
import image032 from "../file/portfolio/image-032.jpg";
import image033 from "../file/portfolio/image-033.jpg";
import image034 from "../file/portfolio/image-034.jpg";
import image035 from "../file/portfolio/image-035.jpg";
import image036 from "../file/portfolio/image-036.jpg";
import image037 from "../file/portfolio/image-037.jpg";
import image038 from "../file/portfolio/image-038.jpg";
import image041 from "../file/portfolio/image-041.jpg";
import image042 from "../file/portfolio/image-042.jpg";
import image051 from "../file/portfolio/image-051.jpg";
import image052 from "../file/portfolio/image-052.jpg";
import image053 from "../file/portfolio/image-053.jpg";
import image061 from "../file/portfolio/image-061.jpg";
import image071 from "../file/portfolio/image-071.jpg";
import image072 from "../file/portfolio/image-072.jpg";

const projects = {
  "daaman-designs": {
    title: "Daaman Designs",
    category: "PHP",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Daaman",
    url: "https://daamandesigns.com/",
    roles: "Web Designing, Development, Testing and Maintenance",
    description: (<div><p>Daaman Design is an e-Commerce system based on Custom PHP which was designed and developed by me while working at Viaduct Pvt. Ltd.</p><p>Its front end and back end is developed by me using HTML, CSS, jQuery client side and PHP for server side.</p></div>),
    images: [image011, image012]
  },
  "happeningpk-organizer": {
    title: "Happening.PK Organizer App",
    category: "Android",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Happening PK",
    roles: "Api Development, App Designing and Development",
    description: (<p>Happening.PK Organizer application was developed for android devices. It was my first android project as a developer at Viaduct Pvt. Ltd. This project was started with no experience in development of android applications. I was able to learn many things while developing it.</p>),
    images: [image021, image022, image023, image024]
  },
  "happeningpk-app": {
    title: "Happening.PK App",
    category: "Android",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Happening PK",
    roles: "Api Development, App Designing and Development",
    description: (<p>Happening.PK application was developed for android devices. It was my second android project as a developer at Viaduct Pvt. Ltd. after the development of Organizer app for Happening.PK.</p>),
    images: [image031, image032, image033, image034, image035, image036, image037, image038]
  },
  "happeningpk": {
    title: "Happening.PK",
    category: "PHP",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Happening PK",
    url: "http://happening.pk/",
    roles: "Web Designing, Development, Testing and Maintenance",
    description: (<div><p>Happening.PK is the event discovery and ticketing platform which was designed and developed by me while working at Viaduct Pvt. Ltd.</p><p>It was converted from WordPress to the custom PHP. Its' front end and back end is developed by me using HTML, CSS, jQuery client side and PHP for server side. In it I also have written a algorithm for redirection which redirect the written url to the links of events or categories if found correctly.</p></div>),
    images: [image041, image042]
  },
  "forrunco": {
    title: "Forrun.co",
    category: "PHP",
    projectUnder: "Viaduct Pvt. Ltd.",
    client: "Forrun Co",
    url: "http://forrun.co/",
    roles: "Web Designing, Development, Testing, API Development and Maintenance",
    description: (<p>Forrun.co was one of my biggest achievement while working under Viaduct Pvt. Ltd. My role in it includes all the steps of software development life cycle. From planning to development to testing,  deployment of project I was in it.Within this project I have developed many management system e.g. Rider Management, Order Management, Customer Management, Account Management, and etc. API was also developed by me for customers to place orders in forrun system or to track orders status.I also did create application for riders that tracks their location when they are online and return back it using PhoneGAP.</p>),
    images: [image051, image052, image053]
  },
  "nkh-group": {
    title: "NKH Group",
    category: "Wordpress",
    client: "NKH Group",
    url: "https://nkhgroup.com.pk/",
    roles: "Theme Integration & Products Management",
    description: (<p>NKH Group website contains e-Commerce system based on Woo-commerce. My role was to install new theme and integrate it according to the clients' needs and manage WordPress Woo-commerce system.</p>),
    images: [image061]
  },
  "amber-batool": {
    title: "Amber Batool",
    category: "Wordpress",
    client: "Amber Batool",
    url: "http://www.amberbatool.com",
    roles: "WordPress Installation & Theme Integration",
    description: (<p>Amber Batool is an e-Commerce system based on Woo-commerce. My role in this project was to manage domain and cloud based hosting (Digital Ocean) with WordPress installation and theme integration in it to show features requested by the client.</p>),
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
    images.push(<div className="col col-sm-6 col-md-4"><img className="img-fluid" data-zoom src={element} alt={projectData.projectName} /></div>);
  });

  return (
    <React.Fragment>
      {/*PortfolioItemDetail*/}
      <div className="pb-2" id="hash">
        <h1 className="title title--h1 title__separate">{projectData.title}
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