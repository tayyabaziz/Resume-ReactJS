import React from "react";

function ContactBoxTitle(data) {
  const title = data.title.split(" ");
  title[0] = <span key={0} className="weight--500">{title[0]} </span>;
  return (
    <h1 className="title title--h3 sidebar__user-name">{title}</h1>
  );
}
export default ContactBoxTitle;