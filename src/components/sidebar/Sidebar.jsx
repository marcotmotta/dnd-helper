import React from 'react'

import { Link } from 'react-router-dom';

import { Search } from '@mui/icons-material';

//styles
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <Link to="/"><h1>DND HELPER</h1></Link>
        <br />
        <Link to="/spell/search">
          <div className="search">
            <h3>Search</h3>
            <Search />
          </div>
        </Link>
      </div>
    </div>
  )
}
