import CustomH2 from "@/components/landingPage/comman/CustomHeading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";
import FacilitiesCarousel from "./FacilitiesCarousel";
import { carouselData } from "@/assets/services/data";
import { Parallax } from "react-parallax";

const Facilities = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Parallax
          bgImage={
            "https://res.cloudinary.com/dw3xsfb9z/image/upload/v1719230757/Component_4_mkj2cg.png"
          }
          strength={400}
          blur={1}
        >
          <div className=" py-20">
            <div
              className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto flex flex-col gap-10`}
            >
              <div>
                <CustomH2>Additional Facilities</CustomH2>
              </div>

              <div>
                <FacilitiesCarousel data={carouselData} />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <div className="block md:hidden">
        <div className=" py-20">
          <div
            className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto flex flex-col gap-10`}
          >
            <div>
              <CustomH2>Additional Facilities</CustomH2>
            </div>

            <div>
              <FacilitiesCarousel data={carouselData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
