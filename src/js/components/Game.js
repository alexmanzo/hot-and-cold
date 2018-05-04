import React from 'react';
import Form from './Form'
import Guess from './Guess'
import GuessList from './GuessList'

const Game = ({checkNumber, feedback, guessCount, previousGuesses}) => {
    return (
        <section className="game">
          <h2 id="feedback">{feedback}</h2>
          <Form checkNumber={checkNumber} />
          <Guess guessCount={guessCount}/>
          <GuessList previousGuesses={previousGuesses} />
        </section> 
    )
}    


export default Game
