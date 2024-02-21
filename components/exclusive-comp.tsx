import React from 'react'
import Container from './container'
import Image from 'next/image'

const ExclusiveComp = () => {
  return (
    <div className='w-full'>
        <Container>
            <div className='flex items-center flex-col justify-center gap-y-4 w-full'>
                <h1 className='font-[700] text-white xl:text-5xl lg:text-3xl md:text-3xl text-3xl text-center'>Entertainment everyone’s talking about</h1>
                <p className='text-xl lg:text-3xl text-neutral-400 text-center'>More hit movies, series, doccies and kids’ shows.</p>
                <div className="mt-12 grid md:grid-cols-6 grid-cols-2 gap-x-10 w-full gap-y-10">
                    <Image 
                        src='/real-wives.jpg' 
                        alt='Real Wives' 
                        height={600} 
                        width={300} />
                    <Image 
                        src='/jayjay.jpg' 
                        alt='Jay Jay' 
                        height={600} 
                        width={300} />
                    <Image 
                        src='/winter-king.jpg' 
                        alt='Winter King' 
                        height={600} 
                        width={300} />
                    <Image 
                        src='/fast.jpg' 
                        alt='Fast and Furious' 
                        height={600} 
                        width={300} />
                    <Image 
                        src='/flawsome.jpg' 
                        alt='Flawsome' 
                        height={600} 
                        width={300} />
                    <Image 
                        src='/slum-king.jpg' 
                        alt='Slum King' 
                        height={600} 
                        width={300} />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ExclusiveComp