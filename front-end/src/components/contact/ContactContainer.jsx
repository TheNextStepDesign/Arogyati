import { mobileWidth } from "@/lib/css"
import ContactInfo from "./ContactInfo"
import Map from "./Map"


const ContactContainer = () => {
  return (
    <div className={`w-[${mobileWidth}] md:w-full  py-5 md:py-0 m-auto md:m-0 gap-5 md:gap-10 md:pl-[280px] flex flex-col md:justify-between  md:flex-row`} >
        <ContactInfo/>
        <Map/>
    </div>
  )
}

export default ContactContainer