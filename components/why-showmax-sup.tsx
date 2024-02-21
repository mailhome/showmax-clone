import Image from "next/image";


interface WhyShowMaxSupProps {
    src: string;
    alt: string;
    desc: string;
    className?: string;
}

const WhyShowMaxSup = ({
    src,
    alt,
    desc,
    className,
}: WhyShowMaxSupProps) => {
  return (
    <div className="bg-[#031124] h-48 w-48 flex flex-col items-center justify-center px-10 rounded-lg gap-y-4">
        <Image 
        src={src} 
        alt={alt} 
        height={300} 
        width={300}
        className={className} />

        <p className="text-neutral-400 text-lg text-center">
            {desc}
        </p>
    </div>
  )
}

export default WhyShowMaxSup