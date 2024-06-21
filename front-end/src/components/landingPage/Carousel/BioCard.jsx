import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import React from 'react'

function BioCard({data}) {
  return (
    <div className='flex flex-col md:flex-row gap-6 pb-4'>
        {
            data.map((data,index)=><Card key={index} className='w-[100%]  md:w-[50%] p-5 ' >
            <CardHeader>
                <div className='flex flex-col md:flex-row  md:items-end gap-5 pb-2' >
                    <div>
                        <img src={data.img} alt="bio-img-1" className='md:w-[100%] m-auto  rounded-xl object-cover' />
                    </div>
                    <div>
                        <p className='text-lg-h3 font-bold text-customgreen pb-2' >
                            {data.name}
                        </p>
                    </div>

                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-2' >
                {
                    data.descriptions.map((des,index)=><p key={index} >{des}</p>)
                }
            </CardContent>
            </Card>)
        }
    </div>
  )
}

export default BioCard