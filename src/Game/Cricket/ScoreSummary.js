import React, { Component } from 'react';

class ScoreSummary extends Component {
  render(){
    return(
      <div className='row padding-top'>
        <div className='col-md-2 col-lg-2'>
          <div className='player-container2'>
            { this.props.currentPlayer === 1 ?
              <h4 className='error'> Your Turn! </h4> : null}
            <h5> {this.props.players[0].name} </h5>
            <h5> {this.props.players[0].score} </h5>
          </div>
        </div>

        <div className='col-md-2 col-lg-2'>
          { this.props.totalPlayers >= 2 ?
            <div className='player-container2'>
              { this.props.currentPlayer === 2 ?
                <h4 className='error'> Your Turn! </h4> : null }
              <h5> {this.props.players[1].name} </h5>
              <h5> {this.props.players[1].score} </h5>
            </div> : null }
        </div>

        <div className='col-md-4 col-lg-4'>
        </div>

        <div className='col-md-2 col-lg-2'>
          { this.props.totalPlayers >= 3 ?
            <div className='player-container2'>
              { this.props.currentPlayer === 3 ?
                <h4 className='error'> Your Turn! </h4> : null }
              <h5> {this.props.players[2].name} </h5>
              <h5> {this.props.players[2].score} </h5>
            </div> : null }
        </div>

        <div className='col-md-2 col-lg-2'>
          { this.props.totalPlayers >= 4 ?
            <div className='player-container2'>
              { this.props.currentPlayer === 4 ?
                <h4 className='error'> Your Turn! </h4> : null }
              <h5> {this.props.players[3].name} </h5>
              <h5> {this.props.players[3].score} </h5>
            </div> : null }
        </div>
      </div>
    );
  }
}

export default ScoreSummary;
