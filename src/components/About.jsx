import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>I am a dedicated and passionate Information Technology student with a strong focus on web development. My journey in this field was enriched by participating in the Kampus Merdeka Studi Independen 
                    Program, where I gained valuable experience as a Full Stack Web Developer with LearningX in batch 5 and with Dicoding in batch 6. This opportunity allowed me to develop 
                    comprehensive skills in HTML, CSS, Javascript and Python.
                </p>

                <br />

                <p className='text-xl'>Apart from web development, I have a keen interest and proven success in UI/UX design, having participated in and won various competitions in this domain. 
                    My technical proficiency is complemented by my creative skills as a freelance graphic designer since 2019, working on a variety of projects such as social media content, 
                    events and advertising. I am enthusiastic about leveraging my technical and creative skills to contribute to innovative projects and collaborate with forward-thinking teams.</p>
            </div>
        </div>

    )
}

export default About