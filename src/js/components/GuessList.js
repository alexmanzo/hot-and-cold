import React from 'react';

const GuessList = (previousGuesses) => {

	const guesses = previousGuesses.previousGuesses
	const guessList = []

	for (let i=0; i<guesses.length; i++) {
		guessList.push(<li key={i}>{guesses[i]}</li>)
	}

    return (
    	<ul className="guessBox clearfix" id="guessList">
    		{guessList}
    	</ul>
    )
}    


export default GuessList
