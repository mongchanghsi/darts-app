import React, { Component } from 'react';

class GameEnd extends Component {
  constructor(props){
    super(props);

    this.state = {
      players: this.props.players,
      winner: '',
      mpr: 0
    };
  }

  componentDidMount(){
    let highestScore = 0;
    let highestName = '';
    let mpr = 0;

    for (var i = 0; i < this.state.players.length; i++){
      if (this.state.players[i].score > highestScore){
        highestScore = this.state.players[i].score
        highestName = this.state.players[i].name
        mpr = this.state.players[i].mpr
      }
    }
    this.setState({ winner: highestName, mpr: mpr })
  }

  render(){
    return(
      <div>
        <h3> Game Over! </h3>
        <h3> The winner is {this.state.winner} </h3>
        <h3> Winner's MPR: {this.state.mpr.toFixed(2)} </h3>
      </div>
    );
  }
}

export default GameEnd;
