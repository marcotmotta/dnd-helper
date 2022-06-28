import React, { useState } from 'react'

import { Link } from "react-router-dom";

//styles
import "./SpellSearch.scss"

export default function SpellSearch() {
    const [spellName, setSpellName] = useState('');

    const handleChange = (event) => {
        let inputValue = event.target.value.toLowerCase();
        inputValue = inputValue.replaceAll(' ', '-');
        setSpellName(inputValue);
    }

    return (
        <div className='spell-search'>
            <input className="spell-input" type="text" placeholder='Search spell by name' onChange={handleChange} />
            <Link to={`/spell/${spellName}`}><button>Search</button></Link>
        </div>
    )
}