import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        
        let name = this.name.value;
        let topic = this.topic.value;
        let path = `teachers/${topic}/${name}`;
        this.props.history.push(path);   
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h3>Favorites: </h3>
                <Link to='teachers/Dota/Zauguidou'>Mister-Z</Link>
                
                <h3>Search: </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name: </label>
                    <input type='text' ref={ (input) => this.name = input} />

                    <label>Topic: </label>
                    <input type='text' ref={ (input) => this.topic = input} />
                    <input type='submit'/>
                </form>
            </div>
        )
    } 
}