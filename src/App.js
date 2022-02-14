import React from 'react';

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
                {this.state.monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default App;