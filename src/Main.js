import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class Main extends React.Component {

    constructor() {
        super();
        console.log('parent constructor running');
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        console.log('componentDidMount');

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {

        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return (
            <div className='App'>
                <h1>Monsters Roladex</h1>
                <SearchBox 
                placeholder="search monsters" 
                handleChange={ this.handleChange } />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default Main;