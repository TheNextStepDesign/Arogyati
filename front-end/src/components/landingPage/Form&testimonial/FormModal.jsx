import React from 'react'

const FormModal = () => {
  return (
    <div className='flex flex-col gap-2 md:w-[40%] w-[80%]' >
                <div className='bg-white p-1' >
                    <input type="text" placeholder='Name' />
                </div>
                <div className='flex justify-between  gap-0' >
                    <div className='bg-white p-1'><input type="number" placeholder='Age' /></div>
                    <div className='bg-white p-1'><input type="number" placeholder='Weight' /></div>
                    <div className='bg-white p-1'><input type="text" placeholder='Gender' /></div>
                    <div className='bg-white p-1'><input type="date" placeholder='Date - DD/MM/YYYY' /></div>
                    
                </div>
                <div className='bg-white p-1' >
                    <input type="text" placeholder='Address' />
                </div>
                <div className='flex justify-between gap-2'>
                    <div className='bg-white p-1 w-[50%]'><input type="number" placeholder='Mobile no.' /></div>
                    <div className='bg-white p-1 w-[50%]'><input type="text" placeholder='Chief Complain' /></div>
                </div>

    </div>
  )
}

export default FormModal