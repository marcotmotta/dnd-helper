import React from 'react'

import { Link } from 'react-router-dom';

import { Search } from '@mui/icons-material';

//styles
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <h1>DND HELPER</h1>
      <br />
      <div className="search">
        <Link to="/spell/search" class="link"><h3>Search</h3><Search /></Link>
      </div>
      <br />
      <h3>Spell Schools</h3>
      <Link to="/school/abjuration"><p>Abjuration</p></Link>
      <Link to="/school/conjuration"><p>Conjuration</p></Link>
      <Link to="/school/divination"><p>Divination</p></Link>
      <Link to="/school/enchantment"><p>Enchantment</p></Link>
      <Link to="/school/evocation"><p>Evocation</p></Link>
      <Link to="/school/illusion"><p>Illusion</p></Link>
      <Link to="/school/necromancy"><p>Necromancy</p></Link>
      <Link to="/school/transmutation"><p>Transmutation</p></Link>
    </div>
  )
}
