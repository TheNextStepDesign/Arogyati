import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css"
import OpeningHoures from "../landingPage/HeroSection/OpeningHoures"
import ContactContainer from "./ContactContainer"


const ContactBody = () => {
  return (
    <div className="bg-[#dedede] py-5 md:py-20 flex flex-col gap-2 md:gap-20" >
        <div  className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
            <OpeningHoures/>
        </div>
        <ContactContainer/>

    </div>
  )
}

export default ContactBody