import React from 'react'
import {assets} from '../assets/assets'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-4 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover h-screen bg-center'>
      <img src={assets.marvelLogo} alt=""  className='max-h-11 lg:h-11 mt-20'/>
      <h1 className='text-5xl md-text-[70px] md:leading-18 font-semibold max-w-110'>Guardians Of <br /> the Galaxy</h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
            <Calendar className='w-4 h-4'/>
            <span>2018</span>
        </div>
         <div className="flex items-center gap-1">
            <Clock className='w-4 h-4'/>
            <span>2h 8m</span>
        </div>
      </div>
      <p className='max-w-md text-gray-300'>A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.</p>
      <button
      onClick={()=>navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-red-500 hover:bg-red-600 transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className='h-5 w-5'/>
      </button>
    </div>
  )
}

export default HeroSection
