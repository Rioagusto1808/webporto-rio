'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

// Import Require Modules
import {Pagination} from 'swiper/modules'

// Components
import ProjectCard from "./ProjectCard"


const projectData = [
    {
        image: '/work/projectobesicare.png',
        category: 'HTML, CSS',
        name: 'Website Obesicare',
        description: 'Website Obesicare is website to create an information forum that can be a solution for people who have obesity problem and want handle it.',
        link: 'https://www.figma.com/team_invite/redeem/mA4rkzpRnQwCLsTeP7KbXW',
        github: 'https://github.com/Rioagusto1808/Obesicare',
    },
    {
        image: '/work/projectwedding.png',
        category: 'UI Design',
        name: 'Website Wedding Organizer',
        description: 'Wedding Organizer is website to make easier for costumer to search, select and manage wedding service. ',
        link: 'https://www.figma.com/team_invite/redeem/4kWfNJMHiYRYzdt2dUMLPq',
        github: '/',
    },
    {
        image: '/work/projectlenka.png',
        category: 'React JS',
        name: 'Lensa Karya is website to Helping certain individuals and groups who need photo services to find photographers according to their photo style preferences.',
        description: 'Lensa Karya is website for freelance and client for place communication gate',
        link: 'https://www.figma.com/files/team/1398263590378399460/all-projects?fuid=1275294971507921497',
        github: 'https://github.com/Rioagusto1808/LenKa',
    },
    {
        image: '/work/projectnime.png',
        category: 'Next JS',
        name: 'Website Ryonimex is website streaming anime.',
        description: 'Ryonimex is website streaming anime',
        link: '/',
        github: 'https://github.com/Rioagusto1808/Ryonime',
    },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="sec-title mb-4">Latest Project</h2>
                <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <Link href='/projects'>
                <Button>
                    All Project
                </Button>
                </Link>
            </div>
            {/* Sliders */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{ 
                    640: {
                        slidesPerView: 2
                    },
                 }} 
                 spaceBetween={30} 
                 modules={[Pagination]} 
                 pagination={{ clickable: 'true' }}>
                    {/* show only the first 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project, index)=> {
                        return(
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work
