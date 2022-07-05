import React from 'react'
import { useState, useEffect } from 'react'

import { useParams, Link } from "react-router-dom";

import Loading from '../loading/Loading';
import SchoolIcon from '../schoolIcons/SchoolIcon'

import { toFirstUpperCase } from '../../utils/toFirstUpperCase'; 

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

    //in case theres no school yet
    if(!Object.entries(spells).length) {
        return (
            <Loading />
        )
    }

    if(spells.error) {

        return (
            <div className="school-component loading">School not found... =(</div>
        )
    }

    return (
        <div className='school-component'>
            <div className='school-symbol'>
                <SchoolIcon school_name={params.school_name}/>
                <span>{toFirstUpperCase(params.school_name)}</span>
            </div>
            <div className='list'>
                {spells.map(spell => {
                    return (
                        <Link to={`/spell/${spell.index}`} className="list-item" key={spell.index}><p>{spell.name}</p></Link>
                    )
                })}
            </div>
        </div>
    )
}
