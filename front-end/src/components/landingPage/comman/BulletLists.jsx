import { cn } from "@/lib/utils"

const BulletLists = ({data,className}) => {
  return (
    <div className={cn(className ,`flex flex-col`)}>
        {
            data.map((el,index)=><li key={index} >{el}</li>)
        }
    </div>
  )
}

export default BulletLists