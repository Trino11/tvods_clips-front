import './Sidebar.css';

import { Outlet, NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Sidebar() {
  return <div className='h-screen bg-slate-100 border-r-2'>
    <ul className='py-4'>
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