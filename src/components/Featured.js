import React from 'react';

const Featured = ({match}) => {
    let name = `${match.params.fname} ${match.params.lname}`;
    let topic = match.params.topic;
    return (
        <div>
            <h1>Featured: </h1>
            <p>Welcome <strong>{name}</strong></p>
            <p>Topic: <strong>{topic}</strong></p>
        </div>
    )
}
export default Featured;