import './Sidebar.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function Sidebar({ className }) {
  return <div className={'top-12 fixed py-1 border-r-2 h-full ' + className}>
    {/* <div className="mx-3 my-3 border-t-2" /> */}

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
  </ div>
}