import './Sidebar.css';

import { Outlet, NavLink } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ScheduleIcon from '@mui/icons-material/Schedule';

function Sidebar() {
  return <>
    <ul>
      <li>
        <NavLink to="/home" className="" activeClassName="">
          <HomeIcon className="icon" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/recents" className="" activeClassName="">
          <ScheduleIcon className="icon" />
          Recents
        </NavLink>
      </li>
      <li>
        <NavLink to="/top" className="" activeClassName="">
          <WhatshotIcon className="icon" />
          Top
        </NavLink>
      </li>
    </ul>
    <Outlet />
  </>
}

export default Sidebar;