import { landingImages } from "@/assets/images-data/landing";
import CustomH2 from "../comman/CustomHeading";

const lists = [
  "First Private Rehab Center In Kolhapur, with advanced modalities inaugurated on 16 Nov",
  "Mentamove",
  "Matrix Rhythm Therapy",
  "Magnetodyn",
  "Class Iv Laser",
  "Super Induction System",
];
const year = ["2007", "2007", "2009", "2016", "2019", "2024"];
const ClinicHistory = () => {
  return (
    <div className="md:w-[50%] w-[100%] flex flex-col">
      <div className="pb-4 ">
        <CustomH2>Clinic History</CustomH2>
      </div>

      <div className="flex  gap-2 ">
        <ol className=" flex-col hidden  md:flex xl:gap-9  2xl:gap-[35px] min-[1800px]:gap-[45px]  pt-5  ">
          {year.map((el, i) => (
            <li key={i} className={i == 0 ? "md:pb-4 pb-1" : ""}>
              {el}
            </li>
          ))}
        </ol>
        <div className="px-1 hidden md:contents">
          <img
            src={landingImages.timeline}
            alt="time-line"
            className="h-[380px] 2xl:h-[380px] min-[1800px]:h-[450px] object-contain"
          />
        </div>
        <ol className="flex flex-col gap-[38px] min-[1800px]:gap-[49px] md:w-[80%] w-[100%]   ">
          {lists.map((el, i) => (
            <div key={i} >

              <div className="hidden md:block" >
                <li >{el}</li>
              </div>

              <div className="flex flex-col gap-1 md:gap-0 md:hidden ">
                <li className="">{year[i]}</li>
                <div className="h-[1px] bg-customgreen" ></div>
                <li >{el}</li>
              </div>

            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ClinicHistory;
