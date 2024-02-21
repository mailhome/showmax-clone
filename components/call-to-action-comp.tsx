import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CalltoActionCompProps {
    src: string;
    heading: string;
    desc: string;
    label: string;
    alt: string;
    height: number;
    width: number;
    className?: string;
    href: string;
}

const CalltoActionComp = ({
    src,
    heading,
    desc,
    label,
    alt,
    height,
    width,
    className,
    href
}: CalltoActionCompProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
        <Image 
            src={src}
            alt={alt}
            height={height}
            width={width} 
            className={className}  />
        <h1 className="xl:text-3xl lg:text-2xl text-lg font-[700] text-center">
            {heading}
        </h1>
        <p className="xl:text-2xl lg:text-xl text-lg text-neutral-400 w-5/6 text-center items-center">
            {desc}
        </p>
        <Button className="mt-8 bg-white xl:text-xl lg:text-lg uppercase rounded-full h-16 py-2 px-10 font-[800] text-[#152233]" asChild>
            <Link href={href} className="">
                {label}
            </Link>
        </Button>
    </div>
  )
}

export default CalltoActionComp