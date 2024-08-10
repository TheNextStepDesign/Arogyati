import ContactBody from "@/components/contact/ContactBody"
import FrontPoster from "@/components/contact/FrontPoster"
import WhatsappRipple from "@/components/contact/WhatsappRipple";
import { useEffect } from "react";


const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Arogyati | Contact'
  }, []);

  
  return (
    <div>
        <FrontPoster/>
        <ContactBody/>
        {/* <WhatsappRipple/> */}
    </div>
  )
}

export default Contact