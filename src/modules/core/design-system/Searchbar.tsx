import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';

export default function () {
  return <div className='relative bg-slate-500 bg-opacity-15 hover:bg-opacity-15 mr-8 ml-0 rounded-lg w-72 text-slate-700'>
    <div className='absolute flex justify-center items-center p-2 h-full pointer-events-none'>
      <SearchIcon />
    </div>
    <InputBase
      className='ml-8'
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </div>
}