import Link from "next/link";
import Container from "./container"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF, FaThreads, FaTwitter, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="bottom-0 w-full py-10">
        <Container>
            <div className="w-full flex xl:flex-row items-center justify-between text-neutral-400/50 ">
                <div className="flex xl:flex-row items-center text-lg gap-x-10 justify-start">
                <p className="hover:text-neutral-300 cursor-pointer">Terms and Conditions</p>
                <p className="hover:text-neutral-300 cursor-pointer">Privacy Policy</p>
                <p className="hover:text-neutral-30 cursor-pointer0">Cookie Preferences</p>
                <p className="hover:text-neutral-300 cursor-pointer">PIAA</p>
                <p className="hover:text-neutral-300 cursor-pointer">Licence Agreement</p>
                <p className="hover:text-neutral-300 cursor-pointer">Website Terms</p>
                <p className="hover:text-neutral-300 cursor-pointer">Privacy Portal</p>
                <p className="hover:text-neutral-300 cursor-pointer">Help</p>
                </div>
                
                <div className="flex items-center justify-center flex-row gap-x-12">
                    <Link 
                        href='' 
                        className="hover:text-rose-800  rounded-full bg-neutral-400/50 p-3">
                        <FaFacebookF 
                            size={16} 
                            className="text-black"  />
                    </Link>

                    <Link href='' className="hover:text-rose-800  rounded-full bg-neutral-400/50 p-3">
                        <FaTiktok 
                            size={16} 
                            className="text-black"  />
                    </Link>

                    <Link href='' className="hover:text-rose-800  rounded-full bg-neutral-400/50 p-3">
                        <FaThreads
                            size={16} 
                            className="text-black"  />
                    </Link>
                    <Link href='' className="hover:text-rose-800  rounded-full bg-neutral-400/50 p-3">
                        <FaTwitter
                            size={16} 
                            className="text-black"  />
                    </Link>
                    <Link href='' className="hover:text-rose-800  rounded-full bg-neutral-400/50 p-3">
                        <FaInstagram
                            size={16} 
                            className="text-black"  />
                    </Link>
                    <Link href='' className="hover:text-rose-800  rounded-full bg-neutral-400/50 p-3">
                        <FaYoutube
                            size={16} 
                            className="text-black"  />
                    </Link>
                </div>
            </div>
            <div className="text-neutral-400/50 w-full mt-12 text-lg">
            This website (www.showmax.com) is copyright protected by the laws of South Africa and the rest of the African Countries represented on this website and by International Treaties. No part of this website (www.showmax.com) may be saved or stored, reproduced, used or transmitted in any form or by any electronic or mechanical means, including, but not limited to storage thereof by e-mail or any other means, and the use thereof on any other website and/or any other media form, without the written and express permission of Showmax.
            </div>
        </Container>
    </div>
  )
}

export default Footer