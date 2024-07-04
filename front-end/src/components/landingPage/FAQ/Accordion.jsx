import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Faqs = [{item:"item-1",question:"What is physiotherapy?",answer:"Physiotherapy is a scientific method of treatment that provides appropriate rehabilitation for disorders and pains related to muscles, bones, joints, nerves, and conditions experienced by children and the elderly."},{item:"item-2",question:"Can we go directly to a physiotherapist, or do we need a referral from a doctor?",answer:"You can directly visit a qualified physiotherapist. Qualified physiotherapists hold a four-and-a-half-year bachelor’s degree and a two-year master’s degree. They diagnose the condition through examination and provide appropriate treatment."},{item:"item-3",question:"What kind of treatments are provided in physiotherapy?",answer:"Modern medical equipment is used for treatment. This includes pain relief, nerve tension treatment through joint mobilization, therapeutic exercises for stroke patients, and treatment for arthritis and musculoskeletal pain."},{item:"item-4",question:"Is physiotherapy just massage?",answer:"Physiotherapy is not just massage."},
  {item:"item-5",question:"Is physiotherapy electrical shock treatment?",answer:"Physiotherapy is not electrical shock treatment."},
  {item:"item-6",question:"Does physiotherapy have any side effects?",answer:"Physiotherapy does not cause side effects."},
  {item:"item-7",question:"Are there any side effects of physiotherapy?",answer:"There are no side effects if you receive treatment from a professional physiotherapist. However, if treated by unqualified individuals, side effects can occur because they may not be able to accurately diagnose the patient's condition."},
  {item:"item-8",question:"Is physiotherapy a week-long treatment?",answer:"The duration of treatment varies from person to person, depending on the severity and duration of the pain, age, and other factors. The decision on the duration of the treatment should be left to the physiotherapist."},
  {item:"item-9",question:"Does physiotherapy only treat symptoms?",answer:"No. Physiotherapy identifies and treats the specific cause and symptoms of the disease without any side effects."},
  {item:"item-10",question:"Is physiotherapy only provided at home?",answer:"No, home treatment is only given to long-term bedridden patients. Other patients should visit physiotherapy clinics on an outpatient basis for the best treatment and results. This also reduces treatment costs."}
]

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
  