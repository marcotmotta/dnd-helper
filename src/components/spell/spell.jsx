import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";

import Loading from '../loading/Loading';
import SchoolIcon from '../schoolIcons/SchoolIcon'

//styles
import "./Spell.scss"

export default function Spell() {

    //url params
    const params = useParams()

    const [spell, setSpell] = useState({})

    //get request to dnd api
    const getSpellByName = (spell_name) => {
        fetch(`https://www.dnd5eapi.co/api/spells/${spell_name}`)
            .then(response => response.json())
            .then(response => setSpell(response))
    }

    useEffect(() => {
        getSpellByName(params.spell_name)
    }, [])

    //in case theres no spell yet
    if(!Object.entries(spell).length) {
        return (
            <Loading />
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
                <p><b>Casting Time:</b> {spell.casting_time}</p>
                <p><b>Range:</b> {spell.range}</p>
                <p><b>Components:</b> {spell.components} {spell.material}</p>
                <p><b>Duration:</b> {spell.duration}</p>
                <br />
                <p>{spell.desc}</p>
                <br />
                <p>{spell.higher_level}</p>
                <br />
                <p><b>Classes:</b>{spell.classes.map(c => {
                    return (' ' + c.name)
                })}</p>
            </div>
        </div>
    )
}
