import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const items = [
  {
    icon: <IoCallSharp size={"25"} color="#7D8E39" />,
    label: "9420294219, (0231)-2651225",
    path: "https://react-icons.github.io/react-icons/search/#q=pin%20lo",
  },
  {
    icon: <MdEmail size={"25"} color="#7D8E39" />,
    label: "info@arogyati.com",
    path: "/email",
  },
  {
    icon: <RiInstagramFill size={"25"} color="#7D8E39" />,
    label: "arogyati",
    path: "https://www.instagram.com/arogyati?igsh=Z3FoOGw5eTlkNXhn",
  },
  {
    icon: <MdLocationPin size={"25"} color="#7D8E39" />,
    label:
      "766 E Mahalaxmi Arcade, Opp. Naik & Co., Near Wilson Bridge, Shahupuri Main Road, Kolhapur",
    path: "/location",
  },
];
export default function Footer() {
  return (
    <footer  className=" bg-[#393939] text-center text-white">
      <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
        <div className="flex justify-center flex-col md:flex-row gap-5  md:gap-0 py-5">
          <div className="w-full md:w-[80%] flex flex-col justify-evenly  gap-3">

            <a
              href={items[0].path}
              
              target="blank"
              className="flex items-center gap-1  cursor-pointer"
            >
              <div>{items[0].icon}</div>
              <p className="ml-2 text-left">{items[0].label}</p>
            </a>

            <div className="flex gap-5 flex-col sm:flex-row" >
              <a
                href={items[1].path}
                
                target="blank"
                className="flex items-center gap-1  cursor-pointer"
              >
                <div>{items[1].icon}</div>
                <p className="ml-2 text-left">{items[1].label}</p>
              </a>

              <a
                href={items[2].path}
                
                target="blank"
                className="flex items-center gap-1  cursor-pointer"
              >
                <div>{items[2].icon}</div>
                <p className="ml-2 text-left">{items[2].label}</p>
              </a>
            </div>

            <a
                href={items[3].path}
                
                target="blank"
                className="flex items-center gap-1  cursor-pointer"
              >
                <div>{items[3].icon}</div>
                <p className="ml-2 text-left">{items[3].label}</p>
            </a>
            


          </div>

          <div className=" w-full  flex flex-col-reverse  md:flex-col  justify-between items-end  ">
            <div className="w-full 2xl:w-[90%] p-2" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.68998944715736!2d74.23125356848838!3d16.700890609736362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100403fffffff%3A0xa9245c61bc097f7e!2sInstitute%20Of%20Physiotherapy%20%26%20Rehablitation!5e0!3m2!1sen!2sin!4v1718180852649!5m2!1sen!2sin" className="w-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            


          </div>
        </div>

        {/* <!--Copyright section--> */}
      </div>
      <div className="bg-neutral-600 p-4 text-center text-[#7D8E39] dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-[#7D8E39] dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          Arogyati
        </a>
      </div>
    </footer>
  );
}
