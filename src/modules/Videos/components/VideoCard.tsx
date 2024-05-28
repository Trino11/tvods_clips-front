import React from 'react'
import { VideoModel } from '../models/VideoModel'

export default function VideoCard({ video, size = 'fixed' }: { video: VideoModel | undefined, size?: 'fixed' | 'auto' }) {
  return <div className={' ' + (size === 'fixed' ? 'mx-1 w-96' : 'px-1 mb-3 md:w-1/2 lg:w-1/3 2xl:w-1/4 w-full') + ' ' + (video === undefined ? 'opacity-0' : '')}>
    <div className={'relative overflow-hidden ' + (size === 'fixed' ? 'w-96' : '')}>
      <img src={video?.splash} className='rounded-lg aspect-video cover-fill' alt={video?.title} />
      <p className='right-2 bottom-2 absolute bg-gray-700 bg-opacity-50 px-2 rounded-md h-min text-white'>{video?.duration}</p>
    </div>
    <div className='flex mt-2'>
      <div className='w-10 min-w-10'>
        <img src={video?.author.picture} className='rounded-full' alt={video?.author.alias} />
      </div>
      <div className='ml-4 leading-none'>
        <h3 className='mb-1 font-semibold text-xl'>{video?.title}</h3>
        <h4>{video?.author.alias}</h4>
        <p>{video?.views} views · {video?.likes} likes · {video?.uploadDate.toDateString()}</p>
      </div>
    </div>
  </div>
}