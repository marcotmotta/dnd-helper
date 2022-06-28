import React from 'react'

import { Link } from 'react-router-dom';

//styles
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h1>Sidebar</h1>
      <Link to="/spell/search">Search</Link>
      <p>Spells</p>
    </div>
  )
}
