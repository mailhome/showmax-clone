import Image from "next/image"
import WhyShowmaxComp from "./why-showmax-comp"
import WhyShowMaxSup from "./why-showmax-sup"
import Link from "next/link"
import { Button } from "./ui/button"

const WhyShowMax = () => {
  return (
    <div className="my-20 w-full md:w-auto">
          <div className="py-20 pb-20 mx-auto w-5/6 xl:pl-32 flex flex-col gap-y-12 text-white justify-center items-center bg-[#031124] rounded-xl">
            <h1 className="text-4xl text-center font-[800] mb-8">
                Why you’ll love Showmax
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-evenly xl:px-20 px-10  gap-x-16 xl:gap-y-16 gap-y-20 w-full">
                <WhyShowmaxComp 
                    src="/flexible.png" 
                    alt="Flexible" 
                    heading="For flexibility" 
                    para="Watch on up to 2 devices at once" />
                <WhyShowmaxComp 
                    src="/flexible.png" 
                    alt="Flexible" 
                    heading="For data savers" 
                    para="Download to watch offline anytime
                    " />
                <WhyShowmaxComp 
                    src="/premier.png" 
                    alt="Premier League" 
                    heading="For Premier League" 
                    para="All 380 matches live on mobile" />
                <WhyShowmaxComp 
                    src="/data.png" 
                    alt="Data" 
                    heading="For data control" 
                    para="Watch on up to 2 devices at once" />
                <WhyShowmaxComp 
                    src="/easy-payment.png" 
                    alt="Easy Payment" 
                    heading="For easy payments" 
                    para="Chose your video quality
                    " />
                <WhyShowmaxComp 
                    src="/variety.png" 
                    alt="For Variety" 
                    heading="For variety" 
                    para="More African and global hits" />
            </div>
        </div>

        <div className="my-20 xl:w-4/6  text-white w-full mx-auto">
                <h1 className="text-5xl text-center font-[800]">
                    Supported devices
                </h1>
                <div className="grid 2xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 grid-cols-2 items-center justify-center xl:px-1 xl:w-11/12   2xl:w-8/12 lg:w-10/12 md:w-9/12 w-10/12 lg:gap-y-6 lg:grid-x-5 md:gap-x-10 md:gap-y-10 gap-x-12 gap-y-12 md:pr-0 pr-5 mx-auto py-20">
                    <WhyShowMaxSup 
                        alt="Android" 
                        src="/android.png" 
                        desc="iOS, Android &
                        Huawei" />
                    <WhyShowMaxSup 
                        alt="Windows &
                        Mac" 
                        src="/desktop.png" 
                        desc="Windows &
                        Mac" />
                    <WhyShowMaxSup 
                        alt="Apple TV" 
                        src="/apptv.png" 
                        desc="Selected
                        models" />
                    <WhyShowMaxSup 
                        alt="Android TV" 
                        src="/androidtv.png" 
                        desc="Selected
                        models" />
                    <WhyShowMaxSup 
                        alt="Hisense" 
                        src="/hisense.png" 
                        desc="Selected TV
                        models" />

                    <WhyShowMaxSup 
                        alt="Samsung" 
                        src="/samsung.png" 
                        desc="Selected TV
                        models" />
                    <WhyShowMaxSup 
                        alt="LG" 
                        src="/lg.png" 
                        desc="Selected TV
                        models" />
                    <WhyShowMaxSup 
                        alt="Xbox" 
                        src="/xbox.png" 
                        desc="Selected
                        models" />
                    <WhyShowMaxSup 
                        alt="Play Station" 
                        src="/playstation.png" 
                        desc="Selected
                        models" />
                    <WhyShowMaxSup 
                        alt="Chrome Cast" 
                        src="/chromecast.png" 
                        desc="Selected TV
                        models" />
                    
                    <WhyShowMaxSup 
                        alt="Play Station" 
                        src="/playstation.png" 
                        desc="Selected
                        models"
                        className=""
                         />
                    <WhyShowMaxSup 
                        alt="Chrome Cast" 
                        src="/chromecast.png" 
                        desc="Selected TV
                        models" />
                </div>  
                <div className="w-full -mt-12 md:w-1/5 items-center justify-center flex 2xl:ml-[56vh] xl:ml-[40%] lg:ml-[38%]">
                    <Button className="bg-white 2xl:w-auto px-10 py-7 rounded-full text-neutral-800 font-[700] md:w-auto w-full" asChild>
                        <Link href='/view-full' className="uppercase md:text-xl text-lg ">
                            view the full list
                        </Link>
                    </Button>
                </div>    
        </div>
        
       
    </div>
  
  )
}

export default WhyShowMax