'use client'

import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react"

const projectData = [
  {
      image: '/work/projectobesicare.png',
      category: '1',
      name: 'Website Obesicare',
      description: 'Obesicare is website for everyone have bad body',
      link: 'https://www.figma.com/team_invite/redeem/mA4rkzpRnQwCLsTeP7KbXW',
      github: 'https://github.com/Rioagusto1808/Obesicare',
  },
  {
      image: '/work/projectwedding.png',
      category: '2',
      name: 'Website Wedding Organizer',
      description: 'Wedding Organizer is website ',
      link: 'https://www.figma.com/team_invite/redeem/4kWfNJMHiYRYzdt2dUMLPq',
      github: '/s',
  },
  {
      image: '/work/projectlenka.png',
      category: '3',
      name: 'Website Lensa Karya',
      description: 'Lensa Karya is website for freelance and client for place communication gate',
      link: 'https://www.figma.com/files/team/1398263590378399460/all-projects?fuid=1275294971507921497',
      github: 'https://github.com/Rioagusto1808/LenKa',
  },
  {
      image: '/work/projectnime.png',
      category: '4',
      name: 'Website Ryonimex',
      description: 'Ryonimex is website streaming anime',
      link: '/',
      github: 'https://github.com/Rioagusto1808/Ryonime',
  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];
 

const Projects = () => {
  const [categories, setCategories] =useState(uniqueCategories);
  const [category, setCategory] =useState('all projects');

  const filteredProjects = projectData.filter(project => {
    // if category is "all projects" return all projects, else filter by category

    return category === 'all projects'
    ? project
    : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="sec-title mb-8 xl:mb-16 text-center mx-auto">my projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>{categories.map((category, index)=> {
            return <TabsTrigger 
            onClick={()=> setCategory(category)}
            value={category} 
            key={index} 
            className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
          })}</TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index} >
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects