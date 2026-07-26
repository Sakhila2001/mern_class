import React from 'react'

const GetName = ({ name, onSendName }) => {

    const handleClick = () => {
        onSendName(name); 
    };
    return (
        <div className="card">
            <p>hello, {name}</p>
            <button onClick={handleClick}>Greet</button>
        </div>
    )
}

export default GetName