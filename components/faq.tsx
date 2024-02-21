
import { ChevronDown } from 'lucide-react'
import Container from './container'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import Link from 'next/link'

const Faq = () => {
  return (
    <div className='w-full bg-[#031124] h-full '>
        <Container>
            <div className="my-20 items-center w-full justify-center flex flex-col">
                <h1 className='text-6xl font-[600] text-white text-center'>
                    Questions? We’ve got you covered.
                </h1>
                
                <div className='w-full flex items-start justify-start'>
                <Accordion 
                type='single' 
                className='text-white w-full ' 
                collapsible>
                    <AccordionItem value='item 1' className='pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            What is Showmax?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                            Showmax is an ad-free video-on-demand service that brings you a wide array of series, movies, documentaries, Showmax Originals, kids’ shows, and Premier League games. With one low monthly price, you get unlimited access, new content added weekly, and the freedom to watch anytime. Plus, there are no contracts, so you can cancel whenever you wish.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 2' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline'>
                            <ChevronDown className='text-sky-800'/>
                            What subscription plans does Showmax offer?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin '>
                            <p className='pb-2'>Showmax offers a variety of plans to suit your viewing preferences:</p>
                            <ol className='list-disc list-inside leading-relaxed pl-10 '>
                                <li className='font-[500]'>
                                Showmax Entertainment plan for all devices
                                </li>
                                <p className='pb-6'>This is the standard Showmax plan that offers customers a range of series, movies, kids’ shows, documentaries including Showmax Originals, MultiChoice originals, and shows from NBC, HBO, Sony, BBC, Sky, Peacock, and other networks on up to five different devices, with two simultaneous streams.</p>
                                <li className='font-[500]'>Showmax Entertainment Mobile plan</li>
                                <p className='pb-6'>
                                This is the mobile version of the Showmax Entertainment plan, and it offers customers the same content at half the price, available on one mobile device.
                                </p>
                                <li className='font-[500]'>
                                Showmax Premier League Mobile
                                </li>
                                <p >
                                This mobile-only plan includes live streaming of every Premier League match, match highlights, behind-the-scenes content, talk shows, interviews, and more.
                                <span className='italic font-[700] '><br />Please note that this plan is available only on mobile devices.</span>
                                </p>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 3' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            What does the Showmax Premier League Mobile plan include?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                        Showmax Premier League Mobile offers live streaming of every Premier League match, match highlights, behind-the-scenes content, talk shows, interviews, and more. <span className='italic font-[700]'>Please note that this plan is available only on mobile devices.</span>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 4' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            How can I pay?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                        Showmax offers several payment methods to suit your preferences. For now, you can pay with your Visa and MasterCard credit and debit cards, by adding to your DStv bill or using prepaid vouchers. Other payment methods will be added over time, and these will be communicated as they become available.
                        </AccordionContent>

                    </AccordionItem>
                    <AccordionItem value='item 5' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            Does Showmax offer high-definition streaming?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                        Yes, Showmax has embraced higher viewing resolutions for better quality images. All content is available at 1080p or above, ensuring that you enjoy your favourite shows and movies in crisp, clear high definition.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 6' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                           Can I watch Showmax on multiple devices?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                            <ul className='list-disc list-inside leading-relaxed pl-10 '>
                                <li>Showmax provides flexible viewing options to fit your lifestyle. With the Entertainment plan for all devices, you can enjoy streaming on up to two screens simultaneously.</li>
                                <li>Our mobile-only plans, which include the Entertainment Mobile plan and Premier League Mobile, are designed for single-screen viewing on a mobile device.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 7' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                           Which devices can I watch Showmax on?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                            <ul className='list-disc list-inside leading-relaxed pl-10 '>
                                <li>
                                    <span className="font-[500]">Web: </span>
                                    Chrome 102+ (Windows/Mac); Firefox 102+ (Windows/Mac); MS Edge 102+ (Windows/Mac); Safari 14+ (Mac)
                                </li>
                                <li>
                                    <span className="font-[500]">Mobile iOS: </span>
                                    14 or above
                                </li>
                                <li>
                                    <span className="font-[500]">Mobile Android: </span>
                                    7.0 or above
                                </li>
                                <li>
                                    <span className="font-[500]">Mobile Huawei</span>
                                </li>
                                <li>
                                    <span className="font-[500]">LG TV:</span>
                                    LG WebOS 3.5 or above; 2016+; LG WebOS 3.0-3.5 ‚Ai support being added for launch
                                </li>
                                <li>
                                    <span className="font-[500]">Samsung TV: </span>
                                    2016+
                                </li>
                                <li>
                                    <span className="font-[500]">Hisense TV: </span>
                                    2018+
                                </li>
                                <li>
                                    <span className="font-[500]">STBs: </span>
                                    STB Explora Ultra; STB Streama
                                </li>
                                <li>
                                    <span className="font-[500]">Android TV: </span>
                                    Wide variety of Android TV-enabled Smart TVs, such as Sony Bravia, and set-top boxes, including NVIDIA Shield, running Android OS 5.1
                                </li>
                                <li>
                                    <span className="font-[500]">
                                    Apple TV: </span>
                                    Apple TV HD (4th Generation or above) with tvOS 16 or above
                                </li>
                                <li>
                                    <span className="font-[500]">Chromecast: </span>
                                    1st Generation or above including Chromecast with Google TV
                                </li>
                                <li>
                                    <span className="font-[500]">PlayStation: </span>
                                    PlayStation: PlayStation 4; PlayStation 5
                                </li>
                                <li>
                                    <span className="font-[500]">Xbox: </span>
                                    Xbox One; Xbox Series X; Xbox Series S
                                </li>

                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 8' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            Is 5.1 Dolby surround sound available with Showmax?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                        Showmax offers 5.1 Dolby surround sound, but please note that this feature is only available with the Entertainment plan for all devices and can be experienced on compatible TV systems. This immersive audio experience elevates your viewing, bringing cinematic sound right into your living room.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 9' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            How do I cancel my Showmax subscription?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                            <p>While we&rsquo;d love for you to stay, if you decide to cancel your subscription, the process is straightforward.</p>
                            <ul className='list-disc list-inside leading-relaxed pl-10 '>
                                <li>Simply log in to your account at www.showmax.com</li>
                                <li>Select your profile avatar and navigate to &rdquo;Account&rdquo;.</li>
                                <li>Under Plans & Payments, select “Manage plan”.</li>
                                <li>Select “Cancel plan” to cancel your subscription.</li>
                            </ul>
                            <p>If you require any assistance, our support team is available to help at <Link href="/help" className='underline underline-offset-2'>
                            showmax.com/ng/help.</Link></p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 10' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            Do I need an internet connection to use Showmax?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                        Yes – as Showmax is an online streaming service, a stable internet connection is required. We recommend a speed of 5 to 10 Mbps for the best experience, either through Wi-Fi or a mobile network. To manage data usage, Showmax offers different streaming qualities and allows for downloading content to your mobile device for offline viewing later.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 11' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            How do I download the Showmax app on my smart TV?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                            <p>To start streaming with Showmax, download our app by following these steps:</p>
                            <ul className='list-disc list-inside leading-relaxed pl-10 '>
                                <li>Search for the Showmax app on your smart TV app store.</li>
                                <li>Install the free Showmax app that appears in the search results.</li>
                                <li>Log in with your Showmax account to enjoy seamless streaming and downloading.</li>
                                <li>(You will need to have set up your account on the website [showmax.com] before logging in on the app. If you don’t remember your username, you can find it in the My Account section on showmax.com.)</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value='item 12' className='pt-10 pb-10'>
                        <AccordionTrigger className='flex items-start justify-start gap-x-2 text-4xl hover:no-underline '>
                            <ChevronDown className='text-sky-800'/>
                            How do I download the Showmax app on my mobile devices?
                        </AccordionTrigger>
                        <AccordionContent className='text-xl pl-12 font-thin'>
                            <p>To start streaming with Showmax, download our app by following these steps:</p>
                            <ul className='list-disc list-inside leading-relaxed pl-10 '>
                                <li>Visit the App Store, Google Play or Huawei app Store on your devices</li>
                                <li>Search for Showmax.</li>
                                <li>Install the free Showmax app that appears in the search results.</li>
                                <li>Log in with your Showmax account to enjoy seamless streaming and downloading.</li>
                                <li>(You will need to have set up your account on the website [showmax.com] before logging in on the app. If you don’t remember your username, you can find it in the My Account section on showmax.com.)</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
            </div>
            </div> 
        </Container>
    </div>
  )
}

export default Faq