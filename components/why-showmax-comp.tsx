import Image from "next/image";


interface WhyShowmaxCompProps {
    src: string;
    alt: string;
    heading: string;
    para: string;
}


const WhyShowmaxComp = ({
    src,
    alt,
    heading,
    para
}: WhyShowmaxCompProps) => {
  return (
    <div className="flex items-center justify-start xl:gap-x-6 gap-x-3 flex-row ">
        <Image 
        src={src} 
        alt={alt}
        height={70} 
        width={70} />
        <div className="flex flex-col justify-center items-start gap-y-2">
            <h1 className="xl:text-2xl text-xl font-[700] capitalize">
                {heading}
            </h1>
            <p className="text-neutral-400 xl:text-xl lg:text-lg">
                {para}
            </p>
        </div>
    </div>
  )
}

export default WhyShowmaxComp