import React from 'react'
import Container from './container'
import CalltoActionComp from './call-to-action-comp'

const CalltoAction = () => {
  return (
    <div className='w-full py-12'>
        <Container className=''>
            <div className="flex items-center flex-col w-full">
            <div className="flex items-center justify-center py-12 bg-[#152233] text-white w-full rounded-xl">
                        <CalltoActionComp 
                        src='/voucher-icon-desktop.png'
                        heading='Have you bought Showmax already?' 
                        desc='Redeem your prepaid voucher here.' 
                        label='redeem voucher' 
                        alt='Voucher Icon' 
                        height= {100}
                        width = {100} 
                        className = '' 
                        href = '/voucher' />
                    </div>
                
                <div className="grid md:grid-cols-2 grid-cols-1 w-full items-center justify-center gap-x-10 gap-y-16 py-16">
                <div className="flex items-center justify-center py-12 bg-[#152233] text-white w-full rounded-xl">
                    <CalltoActionComp 
                        src='/showmax-icon.png'
                        heading='Need help navigating the new Showmax?' 
                        desc='Here’s a helpful guide to our new plans, payment methods, supported devices and more.' 
                        label='explore updates' 
                        alt='Showmax Icon' 
                        height= {100}
                        width = {100} 
                        className = '' 
                        href = '/learnmore' />
                    </div>

                    <div className="flex items-center justify-center py-12 bg-[#152233] text-white w-full rounded-xl py-10">
                    <CalltoActionComp 
                        src='/dstv-desktop.png'
                        heading='Add Showmax to your DStv bill?' 
                        desc='As a DStv subscriber you can enjoy extra discounts and the convenience of a single bill.' 
                        label='Add to bill' 
                        alt='Add to bill' 
                        height= {100}
                        width = {100} 
                        className = '' 
                        href = '/dstv' />
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default CalltoAction