import Image from "next/image"
import Link from "next/link"


const Logo = () => {
  return (
    <Link href='/' className="">
        <Image 
            src='/showmax-logo.png' 
            alt="Logo" 
            height={150} 
            width={150} />
    </Link>
  )
}

export default Logo