import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Faqs = [{item:"item-1",question:"How Many Days Should the Treatment Be Taken?",answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatibus inventore rerum. Nobis repellat tenetur harum quasi doloremque, eum earum."},{item:"item-2",question:"Pros and Cons of Physiotherapy",answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatibus inventore rerum. Nobis repellat tenetur harum quasi doloremque, eum earum."},{item:"item-3",question:"When Is the Right Time to Start Physiotherapy?",answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatibus inventore rerum. Nobis repellat tenetur harum quasi doloremque, eum earum."},{item:"item-4",question:"Side Effects of Treatment",answer:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptatibus inventore rerum. Nobis repellat tenetur harum quasi doloremque, eum earum."}]

  export default function AccordionBox() {
    return (
      <Accordion type="single" collapsible className="w-full">
        {
            Faqs.map((data,i)=>(<AccordionItem key={i} className='border-[#7D8E39]' value={data.item}>
            <AccordionTrigger className='text-left' >{data.question}</AccordionTrigger>
            <AccordionContent className='text-left' >
              {data.answer}
            </AccordionContent>
          </AccordionItem>))
        }
      </Accordion>
    )
  }
  