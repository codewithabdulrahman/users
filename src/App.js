import React from 'react';
import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

export default function App() {
    const { monsters, searchField } = useState('monsters');


    useEffect(()=>{
        console.log('useEffect');
    });

    return (
        <>
            <div className='App'>
                <h1>Monsters Roladex</h1>

            </div>
        </>
    );
}

// <SearchBox
// placeholder="search monsters"
// handleChange={ this.handleChange } />
// <CardList monsters={filteredMonsters} />