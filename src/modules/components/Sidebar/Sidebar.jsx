import './Sidebar.css';

import { Outlet, NavLink } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ScheduleIcon from '@mui/icons-material/Schedule';

function Sidebar() {
  return <div className='h-screen bg-slate-100 border-r-2'>
    <ul>
      <li>
        <NavLink to="/home" className="sidebar-pill sidebar-pill-active" activeClassName="sidebar-pill-active">
          <HomeIcon className="sidebar-icon" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/recents" className="sidebar-pill" activeClassName="sidebar-pill-active">
          <ScheduleIcon className="sidebar-icon" />
          Recents
        </NavLink>
      </li>
      <li>
        <NavLink to="/top" className="sidebar-pill" activeClassName="sidebar-pill-active">
          <WhatshotIcon className="sidebar-icon" />
          Top
        </NavLink>
      </li>
    </ul>
    <Outlet />
  </ div>
}

export default Sidebar;