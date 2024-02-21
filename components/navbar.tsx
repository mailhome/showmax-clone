import Link from "next/link"
import Container from "./container"
import Logo from "./logo"
import { Button } from "./ui/button"


const Navbar = () => {
  return (
    <div className="w-full">
        <Container className="" >
            <div className="flex items-center justify-between md:py-8 py-8" >
                <Logo />
                <div className="flex items-center md:gap-x-10 gap-x-4 justify-center ">
                  <Button variant='ghost' className=" text-neutral-400 rounded-full py-4 px-8 hover:bg-neutral-900 h-12 hover:text-white ">
                    <Link href='/sign-up' className="uppercase font-semibold">
                      sign in
                    </Link>
                  </Button>
                  <Button size='sm' className="bg-[#EB004F] text-white md:rounded-full rounded-lg md:py-4 md:px-8 py-2 px-2  hover:bg-[#EB004F] h-12 ">
                    <Link href='/sign-up' className="uppercase md:text-xl text-md font-semibold ">
                      get started
                    </Link>
                  </Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar