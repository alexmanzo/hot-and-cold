import React, { Component } from 'react';
import Header from './components/Header'
import Game from './components/Game'
import InfoBox from './components/InfoBox'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: 'overlay',
      numberToGuess: Math.floor(Math.random() * Math.floor(100)),
      guessCount: 1,
      previousGuesses: [],
      feedback: 'Make your Guess!'
    }
  }

  toggleClass() {
    const className = 'overlay-display'
    this.setState({className})
  }log

  checkNumber(num) {
    const lowerNumDifference = Math.abs(this.state.numberToGuess - num)
    const highNumDifference = Math.abs(num - this.state.numberToGuess)

    if (num === this.state.numberToGuess.toString()) {
        this.setState({feedback: 'You won! Click new game to play again.'})
    } else if (this.state.previousGuesses.includes(num)){
        alert("You've already guessed that number.")
    } else if (lowerNumDifference < 10 || highNumDifference < 10 ) {
        this.setState({feedback: 'Hot'})
        this.state.previousGuesses.push(num)
        this.setState({guessCount: this.state.guessCount + 1})
    } else {
        this.setState({feedback: 'Cold'})
        this.state.previousGuesses.push(num)
        this.setState({guessCount: this.state.guessCount + 1})
    }
  }


  render() {
    return (
      <div className="App">
        <Header toggleClass={this.toggleClass.bind(this)} />
        <InfoBox className={this.state.className} />
        <Game previousGuesses = {this.state.previousGuesses} guessCount={this.state.guessCount} checkNumber={this.checkNumber.bind(this)} feedback={this.state.feedback}/>
      </div>
    );
  }
}

export default App;
