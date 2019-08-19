import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import ContactBoxAvatar from "./ContactBoxAvatar";
import ContactBoxUpper from "./ContactBoxUpper";
import ContactBoxLower from "./ContactBoxLower";

function ContactBox() {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   let isSubscribed = true;
  //   setTimeout(() => {
  //     if (isSubscribed && isLoading) {
  //       setLoading(false);
  //     }
  //   }, 100);
  //   return () => isSubscribed = false;
  // });

  return (
    <div className="sidebar box sticky-column" style={{ zIndex: 1 }}>
      <ContactBoxAvatar />
      <ContactBoxUpper />
      <button className="btn btn-info btnContactInfo d-block d-xl-none">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </button>
      <ContactBoxLower />
    </div>
  );
}
export default ContactBox;