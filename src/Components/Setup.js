import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Setup extends Component {
  constructor(props){
    super(props);

    this.state = {
      gamemode: '',
      players: 0,
      score: 0,
      errormessage: '',
      playerName: {
        player1Name: 'Player 1',
        player2Name: 'Player 2',
        player3Name: 'Player 3',
        player4Name: 'Player 4'
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.startGame = this.startGame.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(e){
    const { id, value } = e.target;
    this.setState( prevState => ({
      playerName: {
        ...prevState.playerName,
        [id]: value
      }
    }), () => console.log(this.state.playerName))
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state))
  }

  validation(){
    if(this.state.gamemode === 'cricket'){
      if(this.state.players > 0){
        return true;
      }
    } else if (this.state.gamemode === 'countdown'){
      if(this.state.players > 0 && this.state.score > 0){
        return true;
      }
    }
    return false;
  }

  startGame(){
    let isValid = this.validation();
    if (isValid){
      if(this.state.gamemode === 'cricket'){
        this.props.history.push({
          pathname: '/cricket',
          state: { players: this.state.players, playerName: this.state.playerName }
        })
      } else if (this.state.gamemode === 'countdown'){
        this.props.history.push({
          pathname: '/countdown',
          state: { players: this.state.players, score: this.state.score, playerName: this.state.playerName }
        })
      }
    } else {
      this.setState({ errormessage: 'Invalid Attempt' })
    }
  }

  render(){
    return(
      <div>
        <h3> Game Setup </h3>
        <div className='row'>
          <div className='hor-center'>
            <h5> Game Mode: </h5>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gamemode" id="cricket" value="cricket" onClick={this.handleChange}/>
              <label class="form-check-label">
                Cricket
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gamemode" id="countdown" value="countdown" onClick={this.handleChange}/>
              <label class="form-check-label">
                Countdown
              </label>
            </div>
          </div>
        </div>

        { this.state.gamemode === 'countdown' ?
          <div className='row'>
            <div className='hor-center'>
              <h5> Score: </h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="score" id="score" value="301" onClick={this.handleChange}/>
                <label class="form-check-label">
                  301
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="score" id="score" value="501" onClick={this.handleChange}/>
                <label class="form-check-label">
                  501
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="score" id="score" value="701" onClick={this.handleChange}/>
                <label class="form-check-label">
                  701
                </label>
              </div>
            </div>
          </div> : null }

        { this.state.gamemode === 'cricket' ?
          <div className='row'>
            <div className='hor-center'>
              <h5> Type of Cricket </h5>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="crickettype" id="crickettype" value="standard"/>
                <label class="form-check-label">
                  Standard
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="crickettype" id="crickettype" value="cutthroat" disabled/>
                <label class="form-check-label">
                  Cut-throat
                </label>
              </div>
            </div>
          </div>
        : null }

        <div className='row'>
          <div className='hor-center'>
            <h5> No. of Players </h5>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="players" id="players" value="1" onClick={this.handleChange}/>
              <label class="form-check-label">
                1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="players" id="players" value="2" onClick={this.handleChange}/>
              <label class="form-check-label">
                2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="players" id="players" value="3" onClick={this.handleChange}/>
              <label class="form-check-label">
                3
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="players" id="players" value="4" onClick={this.handleChange}/>
              <label class="form-check-label">
                4
              </label>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='hor-center'>
            { this.state.players >= 1 ?
            <form>
              <div className='form-group'>
                <label> Player 1's Name </label>
                <input type='name' className='form-control' id='player1Name' name='player1Name' onChange={this.nameChange}/>
              </div>
            </form> : null }

            { this.state.players >= 2 ?
              <form>
                <div className='form-group'>
                  <label> Player 2's Name </label>
                  <input type='name' className='form-control' id='player2Name' onChange={this.nameChange}/>
                </div>
              </form> : null }

            { this.state.players >= 3 ?
              <form>
                <div className='form-group'>
                  <label> Player 3's Name </label>
                  <input type='name' className='form-control' id='player3Name' onChange={this.nameChange}/>
                </div>
              </form> : null }

            { this.state.players >= 4 ?
              <form>
                <div className='form-group'>
                  <label> Player 4's Name </label>
                  <input type='name' className='form-control' id='player4Name' onChange={this.nameChange}/>
                </div>
              </form> : null }
          </div>
        </div>

        { this.state.errormessage.length > 0 ?
        <small className='error'> {this.state.errormessage} </small> : null }
        <br/>
        { this.state.gamemode ?
        <button type='btn' className='btn btn-dark' onClick={this.startGame}> Start </button> : null }
      </div>
    );
  }
}

export default withRouter(Setup);
