import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.tsx';
import Sidebar from '../Sidebar/Sidebar.tsx';

import Home from '../pages/Home/Home.tsx';
import Recents from '../pages/Recents/Recents.tsx';
import Top from '../pages/Top/Top.tsx';

export default function Main() {
  return (
    <main className=''>
      <Header className='top-0 left-0 fixed h-12' />
      <div className='flex'>
        <Sidebar className='w-56' />
        <div className='flex-1 mt-12 ml-56 w-content overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/recents' element={<Recents />} />
            <Route path='/top' element={<Top />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}