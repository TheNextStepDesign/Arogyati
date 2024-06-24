import CustomH2 from "../landingPage/comman/CustomHeading"
import CustomLink from "../landingPage/comman/customLink"


const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-evenly gap-4 w-full md:w-1/2 " >  

    <div>
        <CustomH2>
        Feel free to connect with us on email or phone for corporate inquiries and career opportunities. 
        </CustomH2>
    </div>
    <div className="2xl:text-lg-h3" >
        <p>Tel. +91 94202 94219 / +91 231 265 12 25</p>
        <p>Email: info@arogyati.com</p>
    </div>
    {/* <div>
        <CustomLink title={'VIEW CLINIC DIRECTIONS'} href={''} />
    </div> */}

    </div>
  )
}

export default ContactInfo