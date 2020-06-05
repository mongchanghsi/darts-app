import React, { Component } from 'react';
import ScoreSummary from './Countdown/ScoreSummary';
import CurrentScore from './Countdown/CurrentScore';
import ScoreCounter from './Countdown/ScoreCounter';
import GameEnd from './Countdown/GameEnd';

class Countdown extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameScore: this.props.location.state.score,
      totalPlayers: parseInt(this.props.location.state.players), // this props is a string
      currentPlayer: 1, // array starts from 0
      currentRound: 1,
      roundScore: 0,
      players: [
        {
          name: this.props.location.state.playerName.player1Name,
          score: this.props.location.state.score,
          ppd: 0
        },
        {
          name: this.props.location.state.playerName.player2Name,
          score: this.props.location.state.score,
          ppd: 0
        },
        {
          name: this.props.location.state.playerName.player3Name,
          score: this.props.location.state.score,
          ppd: 0
        },
        {
          name: this.props.location.state.playerName.player4Name,
          score: this.props.location.state.score,
          ppd: 0
        }
      ],
      gameOver: false
    };
    this.endTurn = this.endTurn.bind(this);
    this.roundScoreUpdate = this.roundScoreUpdate.bind(this);
  }

  endTurn(){
    // 1st half of the function: Update the score of the Current Player
      // Get score (before deduction) of the current player and minus off with the roundScore
    let x = parseInt(this.state.players[this.state.currentPlayer-1].score);

    if (this.state.roundScore < x){
      x = x - this.state.roundScore;

        // Shallow copy an array, update within the new array and setState players with a totally new updated array
      let tempPlayers = [...this.state.players]
      tempPlayers[this.state.currentPlayer-1] = {...tempPlayers[this.state.currentPlayer-1], score: x}
      this.setState({ players: tempPlayers }, () => console.log(this.state.players))

      // 2nd hald of the function: Update the round number and change player
        // Check if player is last player, if yes change to a new round
      if(this.state.currentPlayer !== this.state.totalPlayers){
        this.setState({ currentPlayer: this.state.currentPlayer + 1 }, () => console.log('Round unchange, next player'))
      } else if (this.state.currentPlayer === this.state.totalPlayers){
        if (this.state.currentRound !== 15){
          this.setState({ currentRound: this.state.currentRound + 1, currentPlayer: 1 }, () => console.log('Next round, back to player 1'))
        } else {
          this.setState({ gameOver: true }, () => console.log(this.state.gameOver))
        }
      }
    } else if (this.state.roundScore > x){
      // since it is considered bust, hence there is no need to update the score
      if(this.state.currentPlayer !== this.state.totalPlayers){
        this.setState({ currentPlayer: this.state.currentPlayer + 1 }, () => console.log('Round unchange, next player'))
      } else if (this.state.currentPlayer === this.state.totalPlayers){
        if (this.state.currentRound !== 15){
          this.setState({ currentRound: this.state.currentRound + 1, currentPlayer: 1 }, () => console.log('Next round, back to player 1'))
        } else {
          this.setState({ gameOver: true }, () => console.log(this.state.gameOver))
        }
      }
    } else {
      console.log('current player win before the 15 rounds end')
      x = x - this.state.roundScore;

      let tempPlayers = [...this.state.players]
      tempPlayers[this.state.currentPlayer-1] = {...tempPlayers[this.state.currentPlayer-1], score: x}
      this.setState({ players: tempPlayers })

      this.setState({ gameOver: true}, () => console.log(this.state.gameOver))
    }
  }

  roundScoreUpdate(score){
    this.setState({ roundScore: score}, () => console.log(this.state.roundScore))
  }

  render(){
    return(
      <div className='page-space'>
        <h1> {this.state.gameScore} Countdown</h1>

        { !this.state.gameOver ?
          <div>
            <h2> Round: { this.state.currentRound } </h2>
            <div className='row'>
              <div className='col-md-5 col-lg-5'>
                <CurrentScore score={this.state.players[this.state.currentPlayer-1].score}/>
              </div>

              <div className='col-md-7 col-lg-7'>
                <ScoreCounter roundScoreUpdate={this.roundScoreUpdate}/>
                <p> This round's score: {this.state.roundScore} </p>
                <button type='button' className='btn btn-dark' onClick={this.endTurn}> End Turn </button>
              </div>
            </div>

            <div className='row'>
              <ScoreSummary totalPlayers={this.state.totalPlayers} currentPlayer={this.state.currentPlayer} players={this.state.players}/>
            </div>
          </div> : <GameEnd players={this.state.players} currentRound={this.state.currentRound} gameScore={this.state.gameScore}/>}
      </div>
    );
  }
}

export default Countdown;
