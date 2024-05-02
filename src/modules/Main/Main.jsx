import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import Home from '../pages/Home/Home';
import Recents from '../pages/Recents/Recents';
import Top from '../pages/Top/Top';

export default function Main() {
  return (
    <main className=''>
      <Header className='top-0 left-0 fixed h-12' />
      <div className='flex'>
        <Sidebar className='w-56' />
        <div className='mt-12 ml-56'>
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