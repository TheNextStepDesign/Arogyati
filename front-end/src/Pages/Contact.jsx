import ContactBody from "@/components/contact/ContactBody"
import FrontPoster from "@/components/contact/FrontPoster"
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
    </div>
  )
}

export default Contact