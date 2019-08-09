import React from 'react';
import Cases from '../components/Cases'

function About() {
  return (
    <React.Fragment>
      {/*About*/}
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 title__separate">About Me</h1>
        <p>I'm a Full Stack Web Developer from Karachi, Pakistan, working in development for more than 5 years. I enjoy learning to develop new things using different technologies.</p>
        <p>I've an experience in developing different kind of web applications using PHP, MySQL, HTML, CSS, JavaScript, jQuery, and AJAX. Throughout my career I have developed applications like Food Service Delivery Portal, Forrun (On Demand Courier Portal, and SOAP Services), Happening PK (Event Discovery, Management and Ticket Booking Portal), Daaman (E-Commerce), Amadeus (Business Case Management System), Jasco Generators (E-Commerce), Happening PK (Consumer and Organizer Android Applications), and Wordpress projects like Elbose, Amber Batool and NKH. I am also developing few other projects using NodeJS, ExpressJS, MySQL, Mongoose (MongoDB), and ReactJS for self learning.</p>
        <p>I also love to play games a lot. I also have lot of interest in Game Designing and Development, and one day would like to create my own games.</p>
      </div>
      <Cases />
    </React.Fragment>
  );
}

export default About;