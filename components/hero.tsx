import Link from "next/link"
import Container from "./container"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r 2xl:h-[80vh] xl:h-[60vh] lg:h-[50vh] md:h-[30vh] h-auto from-[rgb(3,17,36)]  to-[#111D2F] flex md:flex-row flex-col-reverse md:items-start items-center justify-between ">
            <div className="xl:w-6/12 lg:w-8/12 flex md:items-left items-center md:justify-left justify-center flex-col 2xl:py-[12vh] xl:py-[8vh] lg:py-[6vh] md:py-[3vh] py-[3vh] text-white lg:gap-y-10 md:gap-y-7 gap-y-10 md:ml-20">
              <h1 className="w-full 2xl:text-[4.5rem] xl:text-6xl lg:text-5xl md:text-3xl text-4xl md:text-left text-center lg:leading-[60px] font-[800] ">
                The new Showmax. <br /> Streaming for Africa. 
              </h1>
              <p className="w-full 2xl:text-3xl xl:text-2xl lg:text-xl md:text-sm text-xl md:text-left text-center">
                  Stream or download hit series, movies and more. Plus <br /> watch every Premier League match live on mobile.
              </p>
              <div className="w-full flex md:items-start md:justify-start justify-center flex-col items-center gap-y-2">
                  <p className="uppercase xl:text-2xl lg:text-xl md:text-md font-[900]">
                      from
                  </p>
                  <p className="2xl:text-[9rem] xl:text-[6rem] lg:text-[4rem] md:text-[3rem]  text-7xl font-black" >
                     &#8358;1,200
                  </p>
              </div>

              <Button size='icon' className="bg-[#EB004F] text-white rounded-full xl:h-16 lg:h-16 h-16 py-4 2xl:w-3/5 xl:w-4/5 lg:w-full md:w-full w-4/5 hover:bg-[#EB004F] 2xl:-ml-72 xl:-ml-32 md:items-left mt-5 px-10" asChild>
                  <Link href='/sign-up' className="uppercase lg:text-xl md:text-md font-bold text-xl ">
                      sign up and start watching
                  </Link>
              </Button>
            </div>
          <div className="bg-[url('/hero-showmax.png')] md:h-full h-[35vh] md:bg-right bg-center bg-no-repeat bg-cover w-full"></div>
        
    </div>
  )
}

export default Hero