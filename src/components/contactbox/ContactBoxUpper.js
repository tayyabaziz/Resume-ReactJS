import React from "react";
import ContactBoxSocial from "./ContactBoxSocial";
import ContactBoxBadge from "./ContactBoxBadge";
import ContactBoxTitle from "./ContactBoxTitle";

function ContactBoxUpper(data) {
  return (
    <div className="text-center">
      <ContactBoxTitle title={data.title} />
      <ContactBoxBadge badge={data.badge}/>
      <ContactBoxSocial socialLinks={data.socialLinks}/>
    </div>
  );
}
export default ContactBoxUpper;