import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";

import SchoolIcon from '../schoolIcons/SchoolIcon'

//styles
import "./Spell.scss"
import { CircularProgress } from '@mui/material';

export default function Spell() {

    //url params
    const params = useParams()

    const [spell, setSpell] = useState({})

    //get request to dnd api
    const getSpell = () => {
        fetch(`https://www.dnd5eapi.co/api/spells/${params.spell_name}`)
            .then(response => response.json())
            .then(response => setSpell(response))
    }

    useEffect(() => {
      getSpell()
    }, [])

    console.log(spell)

    //in case theres no spell yet
    if(!Object.entries(spell).length) {
        return (
            <div className="spell loading"><CircularProgress /></div>
        )
    }

    if(spell.error) {

        return (
            <div className="spell loading">Spell not found... =(</div>
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
            <div className='content'>
                <p>Casting Time: {spell.casting_time}</p>
                <p>Range: {spell.range}</p>
                <p>Components Time: {spell.components} {spell.material}</p>
                <p>Duration Time: {spell.duration}</p>
                <br />
                <p>{spell.desc}</p>
                <br />
                <p>{spell.higher_level}</p>
                <br />
                <p>Classes: {spell.classes.map(c => {
                    return (c.name + ' ')
                })}</p>
            </div>
        </div>
    )
}
