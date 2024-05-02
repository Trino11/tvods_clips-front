import { Outlet, NavLink } from 'react-router-dom';

import TvIcon from '@mui/icons-material/Tv';

export default function Navbar({ className }) {
  return <div className={"flex justify-between items-center border-b-2 w-full " + className}>
    <NavLink to='/' className='pb-0 font-semibold text-2xl text-black sidebar-pill'>
      <TvIcon className='sidebar-icon' />
      TVods
    </NavLink>
    <Outlet />

    <div>Search</div>
    <div>Profile</div>
  </div>
}