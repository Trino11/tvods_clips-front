import React, { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import CallMadeIcon from '@mui/icons-material/CallMade';

import { VideoModel } from '../../Videos/models/VideoModel.ts';
import VideoCard from '../../Videos/components/VideoCard.tsx';

export default function CategoryHolder({ title = 'placeholder', route, type, videos, children } : { title: string, route?: string, type?: 'horizontal' | 'vertical', videos: Function, children?: ReactNode}) {
  return <div className="block my-2 pl-4">
    <NavLink to={'/' + (route ? route : title.toLowerCase())} className='flex items-end mb-2 pr-4 w-fit'>
      <h2 className="mr-2 font-semibold text-2xl">{title}</h2>
      <CallMadeIcon />
    </NavLink>

    <div className={'flex ' + (type === 'vertical' ? 'flex-wrap' : 'flex-row') + ' gap-4 pb-2 overflow-x-scroll overflow-y-hidden scroll-custom'}>
      {videos().map((video) => {
        return <VideoCard video={video} />
      })}
    </div>
  </div>
}