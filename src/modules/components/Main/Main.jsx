import { Route, Routes } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

import Home from '../Pages/Home/Home';
import Recents from '../Pages/Recents/Recents';
import Top from '../Pages/Top/Top';

function Main() {
  return (
    <main>
      <div className='flex'>
        <div className="w-sidebar">
          <Sidebar />
        </div>
        <div className='w-content'>
          <div className='navbar-wrapper'>
            <Navbar />
          </div>
          <div className='content-wrapper'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/recents' element={<Recents />} />
              <Route path='/top' element={<Top />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;