import React from 'react'
import { VideoModel } from './VideoModel'

export default function VideoCard({ video }: { video: VideoModel }) {
  return <div className='max-w-96'>
    <div className='relative w-96 h-52 overflow-hidden'>
      <img src={video.splash} className='rounded-lg cover-fill' />
      <p className='right-2 bottom-2 absolute bg-gray-700 bg-opacity-50 px-2 h-min text-white'>{video.duration}</p>
    </div>
    <div className='flex mt-2'>
      <div className='w-10'>
        <img src={video.author.picture} className='rounded-full' />
      </div>
      <div className='ml-4 leading-none'>
        <h3 className='mb-1 font-semibold text-xl'>{video.title}</h3>
        <h4>{video.author.alias}</h4>
        <p>{video.views} views · {video.likes} likes · {video.uploadDate.toDateString()}</p>
      </div>
    </div>
  </div>
}