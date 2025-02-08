import React from 'react'

function Skills() {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                I am a skilled developer with expertise in HTML, CSS, TypeScript, Next.js, and Node.js. My experience spans creating responsive and visually appealing web interfaces, building scalable and efficient server-side applications, and developing dynamic, modern web solutions using cutting-edge frameworks and technologies.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-indigo-500 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Html</h2>
                        <h2 data-aos="zoom-in-up">Css</h2>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Next js</h2>
                        <h2 data-aos="zoom-in-up">Tailwindcss</h2>
                        <h2 data-aos="zoom-in-up">Node js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
