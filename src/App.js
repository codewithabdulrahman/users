import React from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component {

    constructor() {
        super();
        console.log('parent constructor running');
        this.state = {
            monsters: []
        };
    }

    componentDidMount() {
        console.log('componentDidMount');

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    render() {
        return (
            <div className='App'>
                <CardList name='Abdul'>
                    {this.state.monsters.map(monster => (
                        <h1 key={monster.id}>{monster.name}</h1>
                    ))}
                </CardList>
            </div>
        );
    }
}

export default App;