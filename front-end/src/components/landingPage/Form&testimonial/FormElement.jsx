import React from 'react'
import { Input } from "@/components/ui/input"

const FormElement = () => {
  return (
    <div className='flex flex-col md:gap-5 gap-1 bg-white  w-[100%] md:p-5 p-2 rounded-2xl' >
                <div className='p-0 bg-[#dedede]' >
                    <Input type="text" placeholder='Name' className='bg-[#dedede]'/>
                </div>
                <div className='flex justify-between gap-1  flex-col md:flex-row bg-white' >
                    <div className='bg-[#dedede] p-0'><Input className='bg-[#dedede]' type="number" placeholder='Age' /></div>
                    <div className='bg-[#dedede] p-0'><Input className='bg-[#dedede]' type="number" placeholder='Weight' /></div>
                    <div className='bg-[#dedede] p-0'><Input className='bg-[#dedede]' type="text" placeholder='Gender' /></div>
                    <div className='bg-[#dedede] p-0'><Input className='bg-[#dedede]' type="date" placeholder='Date - DD/MM/YYYY' /></div>
                    
                </div>
                <div className=' p-0 bg-[#dedede]' >
                    <Input className='bg-[#dedede]' type="text" placeholder='Address' />
                </div>
                <div className='flex justify-between gap-1 flex-col md:flex-row  bg-white'>
                    <div className='bg-[#dedede] p-0 md:w-[50%]'><Input className='bg-[#dedede]' type="number" placeholder='Mobile no.' /></div>
                    <div className='bg-[#dedede] p-0 md:w-[50%]'><Input className='bg-[#dedede]' type="text" placeholder='Chief Complain' /></div>
                </div>

    </div>
  )
}

export default FormElement