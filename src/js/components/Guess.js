import React from 'react';

const Guess = ({guessCount}) => {

    return (
    	<p>Guess #<span id="count">{guessCount}</span>!</p>
    )
}    


export default Guess
