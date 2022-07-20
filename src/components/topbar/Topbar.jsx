import React from 'react'

import { Link } from 'react-router-dom';

import { Search } from '@mui/icons-material';

//styles
import './Topbar.scss';

export default function Topbar() {
  return (
    <div className='topbar mobile-only'>
      <div className='topbar-content'>
        <Link to="/"><h1>DND HELPER</h1></Link>
        <Link to="/spell/search">
          <div className="search">
            <Search />
          </div>
        </Link>
      </div>
    </div>
  )
}