import React from 'react'
import { useState, useEffect } from 'react'

import SchoolIcon from '../schoolIcons/SchoolIcon'

//styles
import "./Spell.scss"
import { CircularProgress } from '@mui/material';

export default function Spell({ spell_name }) {

    const [spell, setSpell] = useState({})

    const getSpell = () => {
        fetch(`https://www.dnd5eapi.co/api/spells/${spell_name}`)
            .then(response => response.json())
            .then(response => setSpell(response))
    }

    useEffect(() => {
      getSpell()
    }, [])

    //in case theres no spell yet
    if(!Object.entries(spell).length) {
        return (
            <div className="spell loading"><CircularProgress /></div>
        )
    }

    return (
        <div className="spell">
            <div className='heading'>
                <div className='school'>
                    <SchoolIcon school_name={spell.school.name}/>
                    <span>{spell.school.name}</span>
                </div>
                <div className='title'>
                    <h1 className='name'>{spell.name}</h1>
                    <p className='level'>Level {spell.level}</p>
                </div>
            </div>
        </div>
    )
}
