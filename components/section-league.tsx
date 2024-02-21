import React from 'react'
import Container from './container'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const LeagueAds = () => {
  return (
    <div className='w-full md:py-16 py-16'>
        <Container>
            <div className="w-full 2xl:h-[80vh] xl:h-[60vh] lg:h-[45vh] md:h-[35vh] h-[60vh] 2xl:py-20 mx-auto xl:py-10 grid md:grid-cols-2 grid-cols-1 gap-y-10  2xl:gap-x-10  bg-gradient-to-b from-[rgb(235,0,79)] to-[#EB004F] rounded-xl">
                <div className="bg-[url('/premier-league.png')] bg-center bg-contain bg-no-repeat xl:ml-12 md:mt-12 mt-0"></div>
                
                <div className="justify-center lg:w-auto w-full flex flex-col md:items-start items-center md:text-start text-center xl:gap-y-12 lg:gap-y-5 pl-10 md:gap-y-4 gap-y-6 md:mt-0 -mt-32 px-5">
                    <h1 className='2xl:text-6xl sm:w-5/6 xl:text-7xl lg:text-5xl md:text-4xl text-4xl font-[900] md:items-start items-center md:text-start text-center text-white md:ml-0'>
                      The Premier League <br /> in your pocket
                    </h1>
                    <p className='2xl:text-4xl xl:text-3xl lg:text-xl md:text-xl text-md text-white md:w-4/5 w-full md:px-0 px-2'>
                      Stream all 380 matches live on mobile plus watch highlights, interviews, magazine shows and more.
                    </p>
                    <div className="flex flex-col md:items-start justify-center items-center xl:gap-y-3 lg:gap-y-1">
                      <p className='text-white uppercase lg:text-2xl md:text-lg font-[900] text-xl'>
                        launch price
                      </p>
                      <p className='font-black text-white lg:text-8xl md:text-4xl text-8xl'>
                        &#8358;2,900
                      </p>
                    </div>
                    <Button className='bg-white 2xl:w-auto px-10 py-7 rounded-full text-neutral-800 font-[700]' asChild>
                      <Link href='/premier' className='uppercase md:text-xl text-lg '>
                        Get premier league plan
                      </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default LeagueAds