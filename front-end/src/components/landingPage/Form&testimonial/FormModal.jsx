import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"
import FormElement from "./FormElement"

const FormModal =() => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-[#7D8E39] hover:bg-customblue' >Open Form</Button>
      </DialogTrigger>
      <DialogContent className="md:w-[40%] w-[80%] bg-[#7D8E39]">
        <DialogHeader>
          <DialogTitle className='text-white' >Appointment Form</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <FormElement/>
        <DialogFooter>
          <Button type="submit" className='bg-white text-customblue  hover:bg-customblue hover:text-white'>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FormModal