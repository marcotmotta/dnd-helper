import React from 'react'

import { useState, useEffect } from 'react'

//styles
import "./spell.scss"

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

    if(!Object.entries(spell).length) {
        return (
            <div className="spell loading"><CircularProgress /></div>
        )
    }

    return (
        <div className="spell">{spell.name}</div>
    )
}
