import { cn } from "@/lib/utils"

const BulletLists = ({data,className}) => {
  return (
    <ul className={cn(className ,`flex flex-col list-outside list-disc pl-5`)}>
        {
          data.map((el,index)=><li key={index} >{el}</li>)
        }
    </ul>
  )
}

export default BulletLists