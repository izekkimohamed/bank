import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-primary' variant='ghost' size={"icon"}>
          <Menu size={50} />
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='bg-primary'>
        <SheetHeader>
          <SheetTitle>
            <Link href='/' className='font-medium text-lg '>
              <Image src={Logo} alt='Bank logo' width={140} height={100} />
            </Link>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>  */}
        </SheetHeader>
        <div className='flex flex-col justify-between flex-1 items-center'>
          <div className='flex flex-col gap-4  flex-1 items-center justify-center text-muted'>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Home
            </Link>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Our solutions
            </Link>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Contact us
            </Link>
            <Link
              href='/'
              className='font-medium text-lg hover:text-accent transition-all duration-75'
            >
              Blog
            </Link>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className=' bg-accent text-gray-950 font-bold py-2 px-4 rounded-md'>
              Book a demo
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
