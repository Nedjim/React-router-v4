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
                <h2>Welcome to Home component !</h2>
                <h3>Featured list: </h3>
                <Link to='teachers/Dota/Zauguidou'>Zauguidou</Link>
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' ref={ (input) => this.name = input} />
                    <input type='text' ref={ (input) => this.topic = input} />
                    <input type='submit'/>
                </form>
            </div>
        )
    } 
}