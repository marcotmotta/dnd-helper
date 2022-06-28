import React from 'react'
import { useState, useEffect } from 'react'

import { useParams, Link } from "react-router-dom";

import Loading from '../loading/Loading';
import SchoolIcon from '../schoolIcons/SchoolIcon'

//styles
import "./School.scss"

export default function School() {

    //url params
    const params = useParams()

    const [spells, setSpells] = useState({})

    //get request to dnd api
    const getSpellsBySchool = (school_name) => {
        fetch(`https://www.dnd5eapi.co/api/spells/?school=${school_name}`)
            .then(response => response.json())
            .then(response => setSpells(response.results))
    }

    useEffect(() => {
        getSpellsBySchool(params.school_name)
    }, [params.school_name])

    console.log(spells)

    //in case theres no school yet
    if(!Object.entries(spells).length) {
        return (
            <Loading />
        )
    }

    if(spells.error) {

        return (
            <div className="school loading">School not found... =(</div>
        )
    }

    return (
        <div className='school'>
            <h1>{params.school_name}</h1>
            {spells.map(spell => {
                return (
                    <p key={spell.index}><Link to={`/spell/${spell.index}`}>{spell.name}</Link></p>
                )
            })}
        </div>
    )
}
