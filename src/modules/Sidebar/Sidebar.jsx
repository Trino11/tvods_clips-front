import './Sidebar.css';

import { Outlet, NavLink } from 'react-router-dom';

import TvIcon from '@mui/icons-material/Tv';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Sidebar() {
  return <div className='bg-slate-100 py-4 border-r-2 h-screen'>
    <NavLink to='/' className='pb-0 font-semibold text-2xl text-black sidebar-pill'>
      <TvIcon className='sidebar-icon' />
      TVods
    </NavLink>

    <div className="mx-3 my-3 border-t-2" />

    <ul className=''>
      <li>
        <NavLink to='/home' className={({isActive}) => 'sidebar-pill ' + (isActive ? 'sidebar-pill-active': '')}>
          <HomeIcon className='sidebar-icon' />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/recents' className={({isActive}) => 'sidebar-pill ' + (isActive ? 'sidebar-pill-active': '')}>
          <ScheduleIcon className='sidebar-icon' />
          Recents
        </NavLink>
      </li>
      <li>
        <NavLink to='/top' className={({isActive}) => 'sidebar-pill ' + (isActive ? 'sidebar-pill-active': '')}>
          <WhatshotIcon className='sidebar-icon' />
          Top
        </NavLink>
      </li>
    </ul>
    <Outlet />
  </ div>
}