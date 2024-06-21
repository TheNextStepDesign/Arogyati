import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const FormElement = ({bg=true}) => {
  return (
    <div className={`flex flex-col md:gap-5 gap-3 bg-white w-[80%]  md:w-[100%] md:p-5 p-3 rounded-2xl`} >
                <div className='p-0 bg-[#dedede] rounded-2xl' >
                    <Input type="text" placeholder='Name' className='bg-[#dedede]'/>
                </div>
                <div className='flex justify-between md:gap-1 gap-3  flex-col md:flex-row bg-white ' >
                    <div className='bg-[#dedede] p-0 md:w-[25%] rounded-2xl '><Input className='bg-[#dedede]' type="number" placeholder='Age' /></div>
                    <div className='bg-[#dedede] p-0 md:w-[25%] rounded-2xl '><Input className='bg-[#dedede]' type="number" placeholder='Weight' /></div>
                    <div className='bg-[#dedede] p-0 md:w-[25%] rounded-2xl '><Input className='bg-[#dedede]' type="text" placeholder='Gender' /></div>
                    <div className='bg-[#dedede] p-0 md:w-[25%] rounded-2xl '><Input className='bg-[#dedede]' type="date" placeholder='Date - DD/MM/YYYY' /></div>
                    
                </div>
                <div className=' p-0 bg-[#dedede] rounded-2xl' >
                    <Input className='bg-[#dedede]' type="text" placeholder='Address' />
                </div>
                <div className='flex justify-between md:gap-1 gap-3 flex-col md:flex-row  bg-white'>
                    <div className='bg-[#dedede] p-0 md:w-[50%] rounded-2xl'><Input className='bg-[#dedede]' type="number" placeholder='Mobile no.' /></div>
                    <div className='bg-[#dedede] p-0 md:w-[50%] rounded-2xl'><Input className='bg-[#dedede]' type="text" placeholder='Chief Complain' /></div>
                </div>
                <div className='m-auto' >
                  <Button vavariant='default'  className='bg-customblue hover:bg-customgreen' >Submit</Button>
                </div>

    </div>
  )
}

export default FormElement