import { mobileWidth ,laptopWidth,monitorWidth} from "@/lib/css"
import FormElement from "../landingPage/Form&testimonial/FormElement"
import CustomH2 from "../landingPage/comman/CustomHeading"


const FrontPoster = () => {
  return (
    <div>
        <div className={`md:bg-[url("https://res.cloudinary.com/dw3xsfb9z/image/upload/v1718714241/HeroBG_xvn0xe.png")] bg-cover bg-center md:h-[750px] bg-[#b6c480]  w-full py-10 md:py-0`}>
            <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto flex items-center justify-center md:justify-start h-full `}>


                <div className="w-full md:w-1/2 flex flex-col gap-5" >
                    <div className="text-center" >
                        <CustomH2>Schedule Appointment</CustomH2>
                    </div>
                    <FormElement/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default FrontPoster