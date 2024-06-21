import BulletLists from "@/components/landingPage/comman/BulletLists"
import CustomH2 from "@/components/landingPage/comman/CustomHeading"
import CustomLink from "@/components/landingPage/comman/customLink"

const list1 =['Neck Pain','Wrist Drop','Heel Pain','Geriatrics','COPD','Upper Back Pain','Lower Back Pain','Pediatric Cases','Ortho Cases']
const list2 =["Cardiopulmonary","Frozen Shoulder","All Types Of Fractures","Post Operative Conditions","Neuro Conditions After Joint Replacement","Tennis Elbow","Knee Pain","Stroke","Bell's Palsy"]

const ConditionTreatedLeft = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center" >
      <div>
        <CustomH2>Conditions Treated</CustomH2>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 " >
          <BulletLists data={list1} className={'gap-5 font-bold'}/>
          <BulletLists data={list2} className={'gap-5 font-bold'}/>
      </div>
      <div>
        <CustomLink title={"contact us"} href={"/contact"} />
      </div>
    </div>
  )
}

export default ConditionTreatedLeft