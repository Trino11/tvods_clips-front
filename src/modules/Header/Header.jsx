import './Header.css'

import { Outlet, NavLink } from 'react-router-dom';

import TvIcon from '@mui/icons-material/Tv';
import Searchbar from './Searchbar';

import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import FileUploadIcon from '@mui/icons-material/FileUpload';



export default function Navbar({ className }) {

  return <div className={"flex justify-between items-center border-b-2 w-full " + className}>
    <NavLink to='/' className='pb-0 font-semibold text-2xl text-black sidebar-pill'>
      <TvIcon className='sidebar-icon' />
      TVods
    </NavLink>
    <Outlet />

    <Searchbar />

    <Box className='flex items-center mr-4 py-2'>
      <Button variant="contained" className='h-10'>
        <FileUploadIcon className='mr-2' />
        Upload
      </Button>
      
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls=''
        aria-haspopup="true"
        onClick=''
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Box>
  </div>
}