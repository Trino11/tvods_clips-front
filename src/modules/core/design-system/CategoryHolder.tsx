import React, { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import CallMadeIcon from '@mui/icons-material/CallMade';

import VideoCard from '../../Videos/components/VideoCard.tsx';

export default function CategoryHolder({ title = 'placeholder', route, type = 'horizontal', videos, children } : { title: string, route?: string, type?: 'horizontal' | 'vertical', videos: Function, children?: ReactNode}) {
  const videosToShow: ReactNode[] = videos().map((video) => {
    return <VideoCard video={video} size={type === 'vertical' ? 'auto' : 'fixed'} />
  });

  if (type === 'vertical')
    while(videosToShow.length % 3 !== 0) {
      videosToShow.push(<VideoCard video={undefined} size={type === 'vertical' ? 'auto' : 'fixed'} />);
    }

  return <div className="block my-2 pl-4">
    <NavLink to={'/' + (route ? route : title.toLowerCase())} className='flex items-end mb-2 pr-4 w-fit'>
      <h2 className="mr-2 font-semibold text-2xl">{title}</h2>
      <CallMadeIcon />
    </NavLink>

    <div className={'flex ' + (type === 'vertical' ? 'flex-wrap justify-center' : 'flex-row') + ' pb-2 overflow-x-scroll overflow-y-hidden scroll-custom pr-4'}>
      {videosToShow}
    </div>
  </div>
}