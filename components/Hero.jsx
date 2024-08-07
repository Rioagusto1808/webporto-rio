

import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
}  from 'react-icons/ri';

import Socials from "./Socials";
import DevImage from "./DevImage";
import Badge from "./Badge";

const Hero = () => {
    return (
    <>
    <section className="py-12 xl:py-24 h-[120vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                <h1 className="h1 mb-4">Hello, my name is Rio Agusto</h1>
                <p className="subtitle max-w-[600px] mx-auto xl:mx-0">Information Systems student from the Dian Cipta Cendikia Institute of Business Technology and Languages ​​with experience professionals in the field of front-end developers and back-end developers. Have skills in web development, work on designs according to UI/UX designs accurately. Able to work in a team and adapt to the environment quickly. Currently there is a desire to develop the capabilities of front-end developers and back-end developers through internship opportunities in a professional environment.</p>
                <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <Link href='/contact'>
                <Button className='gap-x-2'>Contact Me<Send size={18}/></Button>
                </Link>
                <Link href='https://drive.google.com/file/d/1uUMTrwAjdGUkgmec2L30MQtnl_Ud9yGG/view?usp=sharing'>
                <Button 
                variant='secondary' 
                className='gap-x-2'>Download CV<Download size={18}/></Button>
                </Link>
                </div>
                
                <Socials 
                containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
                />
                </div>
                <div className="hidden xl:flex relative">
                    {/* Badge 1 */}
                    <Badge 
                    containerStyles='absolute top-[20%] -left-[5rem]'
                    icon={<RiBriefcase4Fill/>} 
                    endCountNum={1} 
                    BadgeText='Years Of Experience'
                    />
                    {/* Badge 2 */}
                    <Badge 
                    containerStyles='absolute top-[59%] -left-[1rem]'
                    icon={<RiTodoFill/>} 
                    endCountNum={6} 
                    BadgeText='Finished Projects'
                    />
                    {/* Badge 3 */}
                    <Badge 
                    containerStyles='absolute top-[55%] -right-8'
                    icon={<RiTeamFill/>} 
                    endCountNum={248} 
                    BadgeText='Followers Instagram'
                    />
                    <div 
                    className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                    <DevImage 
                    containerStyles='bg-hero_shape w-[565px] h-[462px] bg-no-repeat relative bg-bottom' 
                    imgSrc={'/hero/profilerio1.png'}
                    />
                </div>
            </div>
            <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary"
            />
            </div>
        </div>
    </section>
    </>
    )
}

export default Hero
