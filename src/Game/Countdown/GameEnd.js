import React, { Component } from 'react';

class GameEnd extends Component {
  constructor(props){
    super(props);

    this.state = {
      players: this.props.players,
      winner: '',
      ppd: 0
    };
  }

  componentDidMount(){
    let lowestScore = 702;
    let lowestName;
    let ppd;

    for (var i = 0; i < this.state.players.length; i++){
      if (this.state.players[i].score < lowestScore){
        lowestScore = this.state.players[i].score
        lowestName = this.state.players[i].name
      }
    }

    // Game Original Score - lowestScore / (currentRound * 3)
    ppd = (parseInt(this.props.gameScore) - lowestScore)/(this.props.currentRound * 3)
    this.setState({ winner: lowestName, ppd: ppd })
  }

  render(){
    return(
      <div>
        <h3> Game Over! </h3>
        <h3> The winner is {this.state.winner} </h3>
        <h3> Winner's PPD is {this.state.ppd.toFixed(2)} </h3>
      </div>
    );
  }
}

export default GameEnd;
