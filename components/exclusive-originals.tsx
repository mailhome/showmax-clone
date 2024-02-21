import React from 'react'
import Container from './container'
import Image from 'next/image'

const Exclusive = () => {
  return (
    <div className='w-full'>
        <Container>
            <div className='flex items-center flex-col justify-center gap-y-4 w-full'>
                <h1 className='font-[700] text-white xl:text-5xl lg:text-3xl md:text-3xl text-3xl text-center'>Exclusive African Originals</h1>
                <p className='text-xl lg:text-3xl text-neutral-400 text-center'>Even more of the biggest original shows you won’t find anywhere else.</p>
                <div className="mt-12 grid md:grid-cols-6 grid-cols-2 gap-x-10 w-full gap-y-10">
                    <Image 
                        src='/first.jpg' 
                        alt='First Image' 
                        height={700} 
                        width={300} />
                    <Image 
                        src='/second.jpg' 
                        alt='Second Image' 
                        height={700} 
                        width={300} />
                    <Image 
                        src='/third.jpg' 
                        alt='Third Image' 
                        height={700} 
                        width={300} />
                    <Image 
                        src='/fourth.jpg' 
                        alt='Fourth Image' 
                        height={700} 
                        width={300} />
                    <Image 
                        src='/fifth.jpg' 
                        alt='Fifth Image' 
                        height={700} 
                        width={300} />
                    <Image 
                        src='/sixth.jpg' 
                        alt='Sixth Image' 
                        height={700} 
                        width={300} />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Exclusive