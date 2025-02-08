import React from 'react'
import Heading from '@/components/Heading'
import Card from '@/components/Card'
const data = [
    {
        id: 0,
        title: "Calculator Project ",
        desc: "Calculator built using HTML, styled with CSS, and powered by TypeScript for functionality and interactivity",
        img: "/project 01.png",
        tags: ["Html","Css","TypeScript"],

    },
    {
        id: 1,
        title: "Stop Watch Project",
        desc: "Stop Watch built using HTML, styled with CSS, and powered by TypeScript for functionality and interactivity",
        img: "/project 02.png",
        tags: ["Html","Css","TypeScript"],
    },
    {
        id: 2,
        title: "Watch Project",
        desc: "Watch built using HTML, styled with CSS, and powered by TypeScript for functionality and interactivity",
        img: "/project 03.png",
        tags: ["Html","Css","TypeScript"],
    },
    {
        id: 3,
        title: "Static Interactive Resume",
        desc: "Static Resume built using HTML, styled with CSS, and powered by TypeScript for functionality and interactivity",
        img: "/project 04.png",
        tags: ["Html","Css","TypeScript"],
    },
]

function Projects() {
  return (
    <div id='Projects' className='container pt-32'>
   <Heading title='My Projects'/>
   <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {data.map((el) =>(<Card 
    key={el.id}
    title={el.title}
    desc={el.desc}
    img={el.img}
    tags={el.tags}
    />))}
   </div>
     
    </div>
  )
}

export default Projects
