import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

//styles
import "./SpellSearch.scss"

export default function SpellSearch() {

    const [spells, setSpells] = useState([])
    const [showingSpells, setShowingSpells] = useState([])
    const [hasMoreSpells, setHasMoreSpells] = useState(true)

    const [spellName, setSpellName] = useState(null)
    const [spellLevel, setSpellLevel] = useState(null)
    const [spellSchool, setSpellSchool] = useState(null)

    const MAX_SPELLS_PER_SCROLL = 10

    const handleChangeName = (event) => {
        setSpellName(event.target.value)
    }

    const handleChangeLevel = (event) => {
        if (event.target.value < 0) {
            setSpellLevel(null)
        } else {
            setSpellLevel(event.target.value)
        }
    }

    const handleChangeSchool = (event) => {
        if (event.target.value < 0) {
            setSpellSchool(null)
        } else {
            setSpellSchool(event.target.value)
        }
    }

    useEffect(() => {
        getSpells()
    }, [spellName, spellLevel, spellSchool])

    useEffect(() => {
        setHasMoreSpells(spells.length > MAX_SPELLS_PER_SCROLL ? true : false)
        setShowingSpells(spells.slice(0, MAX_SPELLS_PER_SCROLL))
    }, [spells])

    const getSpells = () => {
        let baseurl = 'https://www.dnd5eapi.co/api/spells/?'
        let url = baseurl

        if (spellName) {
            url = url + '&name=' + spellName
        }

        if (spellLevel) {
            url = url + '&level=' + spellLevel
        }

        if (spellSchool) {
            url = url + '&school=' + spellSchool
        }

        fetch(url)
            .then(response => response.json())
            .then(response => setSpells(response.results))
    }

    const getMoreSpells = () => {
        if (showingSpells.length >= spells.length) {
            setHasMoreSpells(false)
        } else {
            setHasMoreSpells(true)
        }

        setShowingSpells([...showingSpells, ...spells.slice(showingSpells.length, showingSpells.length + MAX_SPELLS_PER_SCROLL)])
    }

    return (
        <div className='spell-search'>
            <div className='filters'>
                <div className='filter-container'>
                    <span>Name</span>
                    <input className="filter name-input" type="text" onChange={handleChangeName} />
                </div>
                <div className='filter-container'>
                    <span>Level</span>
                    <select name="level" className="filter level-input" onChange={handleChangeLevel}>
                        <option value="-1">All</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div className='filter-container'>
                    <span>School</span>
                    <select name="school" className="filter school-input" onChange={handleChangeSchool}>
                        <option value="-1">All</option>
                        <option value="abjuration">Abjuration</option>
                        <option value="conjuration">Conjuration</option>
                        <option value="divination">Divination</option>
                        <option value="enchantment">Enchantment</option>
                        <option value="evocation">Evocation</option>
                        <option value="illusion">Illusion</option>
                        <option value="necromancy">Necromancy</option>
                        <option value="transmutation">Transmutation</option>
                    </select>
                </div>
            </div>
            <div>{spells?.length + ' spells found'}</div>
            <InfiniteScroll
                dataLength={showingSpells.length}
                next={getMoreSpells}
                hasMore={hasMoreSpells}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className='list'>
                    {showingSpells?.map(spell => {
                        return (
                            <Link to={`/spell/${spell.index}`} className="list-item" key={spell.index}><p>{spell.name}</p></Link>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}