import { mobileWidth } from "@/lib/css"
import ConditionTreatedLeft from "./ConditionTreatedLeft"
import ConditionTreatedRight from "./ConditionTreatedRight"


const ConditionTreated = () => {
  return (
    <div className="bg-[#C4C4C4]" >
        <div className={`w-[${mobileWidth}] md:w-full  py-10 md:py-0 m-auto md:m-0 gap-10 md:gap-0 md:pl-[280px] flex flex-col md:justify-between md:flex-row`} >
        <ConditionTreatedLeft/>
        <ConditionTreatedRight/>
        </div>
    </div>
  )
}

export default ConditionTreated