import React, { Component } from 'react';
import CurrentScore from './Cricket/CurrentScore';
import ScoreSummary from './Cricket/ScoreSummary';
import GameEnd from './Cricket/GameEnd';
import Mark1 from '../img/Mark1Btn.png';
import Mark2 from '../img/Mark2Btn.png';
import Mark3 from '../img/Mark3Btn.png';

class Cricket extends Component {
  constructor(props){
    super(props);

    this.state = {
      totalPlayers: parseInt(this.props.location.state.players),
      currentPlayer: 1,
      currentRound: 1,
      roundScore: 0,
      roundMark: 0,
      players: [
        {
          name: this.props.location.state.playerName.player1Name,
          score: 0,
          mark: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0 },
          mpr: 0
        },
        {
          name: this.props.location.state.playerName.player2Name,
          score: 0,
          mark: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0 },
          mpr: 0
        },
        {
          name: this.props.location.state.playerName.player3Name,
          score: 0,
          mark: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0 },
          mpr: 0
        },
        {
          name: this.props.location.state.playerName.player4Name,
          score: 0,
          mark: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0 },
          mpr: 0
        }
      ],
      gameOver: false,
      clickedNum: 0,
      toClosed: { show20: true, show19: true, show18: true, show17: true, show16: true, show15: true, show25: true }
    };
    this.endTurn = this.endTurn.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  endTurn(){
    // calculate mpr
    // new mpr = ((old mpr * currentRound - 1) + roundMark) / currentRound
    let oldMPR = this.state.players[this.state.currentPlayer-1].mpr;
    let newMPR = ((oldMPR * (this.state.currentRound-1)) + this.state.roundMark) / this.state.currentRound

    // update the player scores
    var oldPlayerScore = this.state.players[this.state.currentPlayer-1].score;
    var newScore = oldPlayerScore + this.state.roundScore;
    let tempPlayersMark = [...this.state.players]
    tempPlayersMark[this.state.currentPlayer-1] = {...tempPlayersMark[this.state.currentPlayer-1], score: newScore, mpr: newMPR }
    this.setState({ players: tempPlayersMark }, () => this.checkEarlyEndGame())

    // change player for round
    if (this.state.currentPlayer !== this.state.totalPlayers){
      this.setState({ currentPlayer: this.state.currentPlayer + 1}, () => console.log(`Round unchange, next player, ${this.state.currentPlayer}`))
    } else if (this.state.currentPlayer === this.state.totalPlayers){
      if (this.state.currentRound !== 15){
        this.setState({ currentRound: this.state.currentRound + 1, currentPlayer: 1 }, () => console.log('Next round, back to player 1'))
      } else {
        this.setState({ gameOver: true }, () => console.log(this.state.gameOver))
      }
    }

    this.setState({ roundScore: 0, clickedNum: 0, roundMark: 0 })
  }

  onClick(e){
    var scoreName = e.target.id;
    var score  = parseInt(e.target.id);
    var addMark = parseInt(e.target.name);
    var oldPlayerMark = this.state.players[this.state.currentPlayer-1].mark;
    var oldMark = oldPlayerMark[score];

    // If the player miss
    if (score === 0){
      this.setState({ clickedNum: this.state.clickedNum + 1 })
      return;
    }

    // Deciding whether should update roundScore or not
    if (oldMark < 3){
      if (oldMark + addMark <= 3){
        // Just add marks, no additional scores added
      } else if (oldMark + addMark > 3){
        var counter = 0;
        for(var i=0; i < this.state.totalPlayers; i++){
          if (i !== this.state.currentPlayer-1){
            if (this.state.players[i].mark[score] >= 3){
              counter ++;
            }
          }
        }

        if (counter === this.state.totalPlayers-1){
          addMark = 3 - this.state.players[this.state.currentPlayer-1].mark[score];
        } else {
          var offsetMark = (oldMark + addMark) - 3;
          var addScore = offsetMark * score;
          this.setState({ roundScore: this.state.roundScore + addScore }, () => console.log(this.state.roundScore))
        }
      }
    } else if (oldMark >= 3){
      var addScore = addMark * score;
      this.setState({ roundScore: this.state.roundScore + addScore }, () => console.log(this.state.roundScore))
    }

    // Updating Marks hereg(addMark)
    oldPlayerMark[score] = oldPlayerMark[score] + addMark
    let tempPlayersMark = [...this.state.players]
    tempPlayersMark[this.state.currentPlayer-1] = {...tempPlayersMark[this.state.currentPlayer-1], mark: oldPlayerMark}
    this.setState({ players: tempPlayersMark }, () => {
      console.log(this.state.players)

      // check whether can I close the score
      var closeCount = 0;
      for(var i=0; i < this.state.totalPlayers; i++){
          var closedOrNot = this.state.players[i].mark[score]
          if (closedOrNot >= 3){
              closeCount = closeCount + 1
          }
      }
      var someName = 'show' + scoreName
      if (closeCount > 1 && closeCount === this.state.totalPlayers){
          this.setState(prevState => ({
            toClosed: {
              ...prevState.toClosed,
              [someName]: false
            }
          }))
      }

    })
    this.setState({ clickedNum: this.state.clickedNum + 1, roundMark: this.state.roundMark + addMark }, () => console.log(this.state.clickedNum))
  }

  checkEarlyEndGame(){
    // end game if player has closed everything and score is more than other players
    // first, find the highest score amongst the player
    var playerWithHighestScore;
    var tempMaxScore = 0;
    for(var i=0; i < this.state.totalPlayers; i++){
      if (this.state.players[i].score > tempMaxScore){
        tempMaxScore = this.state.players[i].score;
        playerWithHighestScore = i
      }
    }
    // secondly, using that player, find whether is this marks all closed
    var playerWhoClosedEverything;
    var tempTotalMark = 0;
    for(var i=0; i < this.state.totalPlayers; i++){
      var temp = this.state.players[i].mark
      for(var x in temp){
        if(temp[x] >= 3){
          tempTotalMark++;
        }
      }
      if (tempTotalMark === 7){
        playerWhoClosedEverything = i
      }
      if (playerWhoClosedEverything === playerWithHighestScore && typeof(playerWhoClosedEverything) != 'undefined' ){
        this.setState({ gameOver: true })
      }
      tempTotalMark = 0;
    }
  }

  render(){
    return(
      <div className='page-space'>
        <h1> Standard Cricket </h1>

        { !this.state.gameOver ?
          <div>
            <h2> Round: { this.state.currentRound } </h2>
            <div className='row'>
              <div className='col-lg-8'>
                <CurrentScore players={this.state.players} toClosed={this.state.toClosed}/>
                <ScoreSummary players={this.state.players} totalPlayers={this.state.totalPlayers} currentPlayer={this.state.currentPlayer} />
              </div>
              <div className='col-lg-3'>
                { this.state.clickedNum < 3 ?
                <div>
                  <div className='row padding-bottom'>
                    <div className='col-md-3 col-lg-3'>
                      <h2> Score </h2>
                    </div>

                    <div className='col-md-9 col-lg-9'>
                      <h2> Mark </h2>
                    </div>
                  </div>

                  <div className='row padding-bottom'>
                    <div className='col-md-3 col-lg-3'>
                      <h3> Miss </h3>
                    </div>

                    <div className='col-md-9 col-lg-9'>
                      <button type='button' className='btn btn-dark' id='0' name='0' onClick={this.onClick}> No Score </button>
                    </div>
                  </div>

                  { this.state.toClosed.show15 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> 15 </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='15' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='15' name='2' onClick={this.onClick}/>
                        <img src={Mark3} className='mini-mark mark-button' id='15' name='3' onClick={this.onClick}/>
                      </div>
                    </div> : null }

                  { this.state.toClosed.show16 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> 16 </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='16' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='16' name='2' onClick={this.onClick}/>
                        <img src={Mark3} className='mini-mark mark-button' id='16' name='3' onClick={this.onClick}/>
                      </div>
                    </div> : null }

                  { this.state.toClosed.show17 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> 17 </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='17' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='17' name='2' onClick={this.onClick}/>
                        <img src={Mark3} className='mini-mark mark-button' id='17' name='3' onClick={this.onClick}/>
                      </div>
                    </div> : null }

                  { this.state.toClosed.show18 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> 18 </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='18' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='18' name='2' onClick={this.onClick}/>
                        <img src={Mark3} className='mini-mark mark-button' id='18' name='3' onClick={this.onClick}/>
                      </div>
                    </div> : null }

                  { this.state.toClosed.show19 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> 19 </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='19' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='19' name='2' onClick={this.onClick}/>
                        <img src={Mark3} className='mini-mark mark-button' id='19' name='3' onClick={this.onClick}/>
                      </div>
                    </div> : null }

                  { this.state.toClosed.show20 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> 20 </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='20' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='20' name='2' onClick={this.onClick}/>
                        <img src={Mark3} className='mini-mark mark-button' id='20' name='3' onClick={this.onClick}/>
                      </div>
                    </div> : null }

                  { this.state.toClosed.show25 ?
                    <div className='row padding-bottom'>
                      <div className='col-md-3 col-lg-3'>
                        <h3> Bull </h3>
                      </div>

                      <div className='col-md-9 col-lg-9'>
                        <img src={Mark1} className='mini-mark mark-button' id='25' name='1' onClick={this.onClick}/>
                        <img src={Mark2} className='mini-mark mark-button' id='25' name='2' onClick={this.onClick}/>
                      </div>
                    </div> : null }
                </div> : <h2 className='padding-bottom'> No more throws! </h2> }
                <h3> This score round is {this.state.roundScore}</h3>
                <button type='button' className='btn btn-dark' onClick={this.endTurn}> End Turn </button>
              </div>
            </div>
          </div>
        : <GameEnd players={this.state.players}/> }
      </div>
    );
  }
}

export default Cricket;
