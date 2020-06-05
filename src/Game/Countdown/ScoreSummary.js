import React, { Component } from 'react';
import DartsGIF from '../../img/darts.gif';

class ScoreSummary extends Component {
  render(){
    return(
      <div className='row padding-top'>
        <div className='col-12 col-md-3 col-lg-3'>
          <div className='player-container'>
            { this.props.currentPlayer === 1 ?
            <h4 className='error'> Your Turn! </h4> : null }
            <h4> {this.props.players[0].name} </h4>
            <h4> {this.props.players[0].score} </h4>
          </div>
        </div>

        <div className='col-12 col-md-3 col-lg-3'>
          { this.props.totalPlayers >= 2 ?
            <div className='player-container'>
              { this.props.currentPlayer === 2 ?
              <h4 className='error'> Your Turn! </h4> : null }
              <h4> {this.props.players[1].name} </h4>
              <h4> {this.props.players[1].score} </h4>
            </div> : null }
        </div>

        <div className='col-12 col-md-3 col-lg-3'>
          { this.props.totalPlayers >= 3 ?
            <div className='player-container'>
              { this.props.currentPlayer === 3 ?
              <h4 className='error'> Your Turn! </h4> : null }
              <h4> {this.props.players[2].name} </h4>
              <h4> {this.props.players[2].score} </h4>
            </div> : null }
        </div>

        <div className='col-12 col-md-3 col-lg-3'>
        { this.props.totalPlayers >= 4 ?
          <div className='player-container'>
            { this.props.currentPlayer === 4 ?
            <h4 className='error'> Your Turn! </h4>: null }
            <h4> {this.props.players[3].name} </h4>
            <h4> {this.props.players[3].score} </h4>
          </div>
         :null}
        </div>
      </div>
    );
  }
}

export default ScoreSummary;
