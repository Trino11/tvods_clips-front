import React from 'react';

import CallMadeIcon from '@mui/icons-material/CallMade';

export default function CategoryHolder({ title = 'placeholder', children }) {
  return <div className="block my-2 pl-4">
    <div className='flex items-end mb-2'>
      <h2 className="mr-2 font-semibold text-2xl">{title}</h2>
      <CallMadeIcon />
    </div>
    <div className='flex flex-row gap-4 pb-2 overflow-x-auto overflow-y-hidden'>
      {children}
    </div>
  </div>
}