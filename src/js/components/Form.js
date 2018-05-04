import React from 'react';


const Form = ({logGuess, checkNumber}) => {

    return (
    	<form onSubmit={(event) => {
			event.preventDefault()
			const userGuess = event.target.userGuess.value

			checkNumber(userGuess)

			event.target.userGuess.value=''}}>
    		<input type="text" name="userGuess" id="userGuess" className="text" maxLength={3} placeholder="Enter your Guess" required />
    		<input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
    	</form>
    )
}    


export default Form
