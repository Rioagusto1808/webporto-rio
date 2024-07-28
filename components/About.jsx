import Image from "next/image"
import DevImage from "./DevImage"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    BriefCase,
    Phone,
    Briefcase
} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Rio Agusto',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+62 895 3211 25978',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'rioagustor18@gmail.com',
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born On 18 Aug, 2002',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'System Information',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Lampung, Indonesia.',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university : 'Junior High School',
                qualification : 'SMP Negeri 6 Kotabumi',
                years : '2013 - 2016',
            },
            {
                university : 'Vocational High School',
                qualification : 'SMK Negeri 2 Kotabumi',
                years : '2016 - 2019',
            },
            {
                university : 'Institut Teknologi Bisnis Dan Bahasa Dian Cipta Cendikia',
                qualification : 'S.Kom',
                years : '2021 - 2025',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company : ' MSIB 5 Infinite Learning',
                qualification : 'Web Development',
                years : 'Semester 5',
            },
            {
                company : 'Kampus Mengajar 7',
                qualification : 'SMP Negeri 3 Abung Semuli',
                years : 'Semester 6',
            },
        ]
    }
]


const skillData = [
    {
        title: 'skills',
        data : [
            {
                name: 'HTML, CSS, JavaScript'
            },
            {
                name: 'Front-end Development'
            },
            {
                name: 'Back-end Development'
            },
            {
                name: 'UI/UX Desaigner'
            },

        ]
    },
    {
        title: 'tools',
        data : [
            {
                name: 'Figma'
            },
            {
                name: 'Canva'
            },
            {
                name: 'Capcut'
            },
            {
                name: 'Blender'
            },
            {
                name: 'Github'
            },
            {
                name: 'Microsot Office'
            },
            {
                name: 'Postman'
            },

        ]
    },
]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    return (
<sectionc className='xl:h-[860px] pb-12 xl:py-24'>
<div className="container mx-auto">
    <h2 className="sec-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
    <div className="flex flex-col xl:flex-row">
        {/* Image */}
        <div className="hidden xl:flex flex-1 relative">
            <DevImage containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/profilerio1.png'/>
        </div>
        {/* Tabs */}
        <div className="flex-1">
            <Tabs defaultValue="personal">
                <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info
                    </TabsTrigger>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                    <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                </TabsList>
                {/* Tabs content */}
                <div className="text-lg mt-12 xl:mt-8">
                    <TabsContent value='personal'>
                    <div className="text-center xl:text-left"> 
                    <h3 className="h3 mb-4 ">Unmatched Service Quality for Over 10 Years</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting Intuitive websites with cutting-edge technology, delivering dynamic and engaging user experience.</p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                        {infoData.map((item, index) =>{
                            return(
                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                    <div className="text-primary">{item.icon}</div>
                                    <div>{item.text}</div>

                                </div>
                            )
                        })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                        <div className="text-primary">Languages Skill</div>
                        <div className="border-b border-border">

                        </div>
                        <div>English, Indonesia</div>
                    </div>
                    </div>
                    </TabsContent>
                    {/* Qualifications */}
                    <TabsContent value='qualifications'>
                        <div>
                            <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                            {/* Experience and Education Wrapper*/}
                            <div className="grid md:grid-cols-2 gap-y-8">
                                {/* Experience */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        <Briefcase/>
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, 'experience').title}
                                        </h4>
                                    </div>
                                    {/* List */}
                                    <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData, 'experience').data.map((item, index)=> {
                                            const {company, qualification, years} = item;
                                            return(
                                                <div className="flex gap-x-8 group" key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                        <div className="text-base font-medium">{years}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* Education */}
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                        <GraduationCap size={25}/>
                                        <h4 className="capitalize font-medium">
                                            {getData(qualificationData, 'education').title}
                                        </h4>
                                    </div>
                                    {/* List */}
                                    <div className="flex flex-col gap-y-8">
                                        {getData(qualificationData, 'education').data.map((item, index)=> {
                                            const {university, qualification, years} = item;
                                            return(
                                                <div className="flex gap-x-8 group" key={index}>
                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                        <div className="text-base font-medium">{years}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    {/* Skills */}
                    <TabsContent value='skills'>
                        <div className="text-center xl:text-left">
                            <h3 className="h3 mb-8">What I Use Everyday</h3>
                            {/* Skills */}
                            <div className="mb-16">
                                <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                <div className="border-b border-border mb-4"></div>
                                {/* Skill List */}
                                {getData(skillData, 'skills').data.map((item, index) =>{
                                    const {name} = item;
                                    return(
                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                            <div className="font-medium">{name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* Tools */}
                            <div>
                                <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                <div className="border-b border-border mb-4"></div>
                                <div className="flex gap-x-8 justify-center xl:justify-start">
                                    {getData(skillData, 'tools').data.map((item, index)=> {
                                        const {name} = item;
                                        return(
                                            <div key={index}>
                                                <div>{name}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </div>
</div>
</sectionc>
    )
}

export default About