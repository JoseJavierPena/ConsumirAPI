import React from 'react';
import fotos from './fotos';

class Container extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            fotos: [],
            isFetch: true,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(fotosJson => this.setState({ fotos: fotosJson, isFetch: false}))
    }

    render() {
        if(this.state.isFetch) {
            return 'Loading...'
        }
        const name = this.state.fotos[0].displayName
        return <fotos name={name}/>
    }
}

export default Container;