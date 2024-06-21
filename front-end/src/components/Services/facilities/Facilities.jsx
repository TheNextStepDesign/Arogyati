import CustomH2 from "@/components/landingPage/comman/CustomHeading"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css"
import FacilitiesCarousel from "./FacilitiesCarousel"
import { carouselData } from "@/assets/services/data"

const data = [{img:"",title:"Super Inductive System",des:"These pulses can help improve joint mobilization and increase circulation and action of the joints."},
    {img:"",title:"Matrix Rhythm Therapy",des:"Advanced German Therapy used for effective deep muscle relaxation."},
    {img:"",title:"Magnetodyn",des:"This therapy is used to preserve the normal and healthy tissues and heal the damaged tissues at the cellular level."},
    {img:"",title:"Class IV Laser",des:"Used to relieve severe localized pain and reduce swelling."},
    {img:"",title:"Osteopathy",des:"It is an alternative medicine where physiotherapist realign the body by moving, stretching and massaging a persons muscle & joints."}
]

const Facilities = () => {
  return (
    <div className="bg-[#dedede97] py-20" >

        <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto flex flex-col gap-10`}  >

            <div>
                <CustomH2>Additional Facilities</CustomH2>
            </div>

            <div  >

                <FacilitiesCarousel data={carouselData} />
            

            </div>

            {/* <div>

                <Card className='bg-[#C4C4C4] w-1/4 h-[200px] px-3 flex flex-col gap-3' >

                    <Card className='w-1/2  -mt-20' >
                        <img src="images/eg.png" width={'100%'} alt="ong-eg" />
                    </Card>

                    <div>
                        <h3 className="text-[22px] font-bold" >
                        Matrix Theropy
                        </h3>
                    </div>
                    <div>
                        <p>
                        Advances German therapy used for effective deep muscle relaxation
                        </p>
                    </div>


                </Card>

            </div> */}



        </div>

    </div>
  )
}

export default Facilities