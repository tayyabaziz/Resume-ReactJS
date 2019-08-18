import React from "react";
import ContactBoxSocial from "./ContactBoxSocial";
import ContactBoxBadge from "./ContactBoxBadge";
import ContactBoxTitle from "./ContactBoxTitle";

function ContactBoxUpper() {
  return (
    <div className="text-center">
      <ContactBoxTitle />
      <ContactBoxBadge />
      <ContactBoxSocial />
    </div>
  );
}
export default ContactBoxUpper;