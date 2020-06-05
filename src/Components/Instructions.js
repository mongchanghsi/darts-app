import React, { Component } from 'react';

class Instructions extends Component {
  constructor(props){
    super(props);

    this.state = {
      showMain: true,
      showCountdown: false,
      showCricket: false
    };
    this.changeToCountdown = this.changeToCountdown.bind(this);
    this.changeToCricket = this.changeToCricket.bind(this);
    this.changeToMain = this.changeToMain.bind(this);
  }

  changeToCountdown(){
    this.setState({ showCountdown: true, showMain: false })
  }

  changeToCricket(){
    this.setState({ showCricket: true, showMain: false })
  }

  changeToMain(){
    this.setState({ showMain: true, showCountdown: false, showCricket: false })
  }

  render(){
    return(
      <div className='page-space'>
        <h2> How to play </h2>
        { this.state.showMain ?
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <button type='button' className='btn btn-dark' onClick={this.changeToCountdown}> Countdown </button>
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
              <button type='button' className='btn btn-dark' onClick={this.changeToCricket}> Cricket </button>
            </div>
          </div> : null }


        { this.state.showCountdown ?
          <div>
            <h4> Instructions for Countdown Mode </h4>
            <p className='justify'> Each playes starts with a score of 301/501/701 and takes turns to throw 3 darts. The score for each turn is calculated and deducted from the players' total. Bulleyes scores 50, and a dart in the double or treble ring counts doble or treble the segment score. The objective is to be the first player to reduce the score to exactly zero. </p>
            <p className='justify'> If a player reduces the score to below 0, the score is bust, that turn ends immediately and the score is returned to what it was at the start of that turn. E.g. If a player has 32 to go out and the first dart is a 16, the second is a 15, the player is bust and the score is returned to 32. Therefore, on the last turn, it is not necessary to throw all 3 darts - a player can win with the first or second dart of the turn. </p>
            <small> Instruction is taken and modified from https://www.mastersofgames.com/rules/darts-rules.htm </small>
            <br/>
            <button type='button' className='btn btn-dark' onClick={this.changeToMain}> Back to Main </button>
          </div>
        : null }

        { this.state.showCricket ?
          <div>
            <h4> Instructions for Cricket Mode </h4>
            <p className='justify'> Players take turns throwing 3 darts at the board, trying to hit 15 through 20 and the bullseye. If you hit any other number, you do not score and you missed a shot. Cricket requires each person to 'close out' numbers, meaning players have to score each number and the bullseye 3 times before the game can end. If you hit the outer ring of a number, that counts for 2, and if you hit the inner ring, that counts as 3. For bullseye, the outer ring counts for 1 and the innner circle counts for 2. So, if you hit the inner ring of 15, that closes it out for your team. If a player closes out a number before the other does, that player can start racking up points every time they hit that number until the other player closes it out. Once both teams have closed out a number, it is no longer in play and neither team can score points on it. The team that closes out the board with greater or equal points wins. </p>
            <small> Instruction is taken and modified from https://www.thrillist.com/culture/cricket-darts-rules </small>
            <br/>
            <button type='button' className='btn btn-dark' onClick={this.changeToMain}> Back to Main </button>
          </div>
        : null }
      </div>
    );
  }
}

export default Instructions;
