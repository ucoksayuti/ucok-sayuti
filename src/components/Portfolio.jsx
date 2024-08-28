import React from 'react'
import legacy from '../assets/legacy.png';
import swiftRoom from '../assets/swift-room.png';
import harmonyResort from '../assets/harmony-resort.png';
import sweeterVocab from '../assets/sweet-vocab.png';
import bucketList from '../assets/bucket-list.png';
import sumaculinary from '../assets/sumaculinary.png';
import moviecatalog from '../assets/moviecatalog.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: legacy,
            name: 'Legacy',
            link: 'https://legacy-frontend-mu.vercel.app/',
            linkText: 'legacy-frontend-mu.vercel.app'
        },
        {
            id: 2,
            src: swiftRoom,
            name: 'Swift Room',
            link: 'https://github.com/ucoksayuti/swift-room.git',
            linkText: 'github.com/swift-room.git'
        },
        {
            id: 3,
            src: harmonyResort,
            name: 'Haromy Resort',
            link: 'https://harmony-hotel-meta.glitch.me',
            linkText: 'harmony-hotel-meta.glitch.me'
        },
        {
            id: 4,
            src: moviecatalog,
            name: 'Movie Catalog',
            link: 'https://react-netflix-clone-b9719.web.app/profile',
            linkText: 'movie-catalog-netflix-clone-app',
        },
        {
            id: 5,
            src: bucketList,
            name: 'Bucket List',
            link: 'https://fanbook-project-ucok.glitch.me',
            linkText: 'bucket-list.glitch.me'
        },
        {
            id: 6,
            src: sumaculinary,
            name: 'Catalog Restaurant',
            link: 'https://github.com/ucoksayuti/suma-culinary.git',
            linkText: 'github.com/suma-culinary.git'
        },
    ]

    return (
        <div name='portfolio'
            className='bg-gradient-to-b py-20 from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        portfolios.map(({ id, src, name, link, linkText }) => (
                            <div key={id} className='bg-[#363B43] shadow-xl shadow-black/50 rounded-md'>
                                <img src={src} alt=''
                                    className='rounded-md duration-200 hover:scale-105' />
                                <div className='my-3 mx-4'>
                                    <p className='text-xl font-medium mb-2'>{name}</p>
                                    <button className=' duration-200 hover:scale-105'><a href={link} target="_blank" rel="noreferrer" className='text-green-400'>{linkText}</a></button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Portfolio