import React from "react";
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
      <ContactBoxLower />
    </div>
  );
}
export default ContactBox;