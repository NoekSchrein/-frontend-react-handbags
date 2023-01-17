import React from 'react';

function Tile(props) {
    return (
        <section>
            <img src={props.img} alt={props.imgDescription}/>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    );
}

export default Tile;