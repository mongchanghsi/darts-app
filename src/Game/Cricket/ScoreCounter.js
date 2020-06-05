import React, { Component } from 'react';

const cleanState = {
  s1: 0,
  s2: 0,
  s3: 0,
  m1: 0,
  m2: 0,
  m3: 0,
  roundMark: { 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0 }
}

class ScoreCounter extends Component {
  constructor(props){
    super(props);

    this.state = cleanState;
    this.onChange = this.onChange.bind(this);
    this.onChangeMark = this.onChangeMark.bind(this);
    this.clearCounter = this.clearCounter.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.id]: e.target.value }, () => console.log(this.state))
  }

  onChangeMark(e){
    const { id, value } = e.target;

    this.setState({ [id]: value }, () => {
      // assuming that score is ALREADY updated
      let whichScoreToUpdate;
      let scoreToUpdate;

      if (id === 'm1'){
        whichScoreToUpdate = this.state.s1
        scoreToUpdate = this.state.roundMark[whichScoreToUpdate] + parseInt(this.state.m1)
      } else if (id === 'm2'){
        whichScoreToUpdate = this.state.s2
        scoreToUpdate = this.state.roundMark[whichScoreToUpdate] + parseInt(this.state.m2)
      } else if (id === 'm3'){
        whichScoreToUpdate = this.state.s3
        scoreToUpdate = this.state.roundMark[whichScoreToUpdate] + parseInt(this.state.m3)
      }

      this.setState( prevState => ({
        roundMark: { ...prevState.roundMark, [whichScoreToUpdate]: scoreToUpdate
        }
      }), () => this.props.roundMarkUpdate(this.state.roundMark))
    })
  }

  clearCounter(){
    this.setState(cleanState, () => console.log(this.state));
  }

  render(){
    return(
      <div>
        {/* label row */}
        <div className='row'>
          <div className='col-md-2 col-lg-2'>
            <label> Dart </label>
          </div>

          <div className='col-md-5 col-lg-5'>
            <label> Score </label>
          </div>

          <div className='col-md-5 col-lg-5'>
            <label> Multiplier </label>
          </div>
        </div>

        {/* Dart #1 */}
        <div className='row'>
          <div className='col-md-2 col-lg-2'>
            <label> #1 </label>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='s1' onChange={this.onChange} required>
                <option value="0"> Miss (1-14) </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="25"> Bull </option>
              </select>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='m1' onChange={this.onChangeMark} required>
                <option value="0"> Select </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
              </select>
            </div>
          </div>
        </div>

        {/* Dart #2 */}
        <div className='row'>
          <div className='col-md-2 col-lg-2'>
            <label> #2 </label>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='s2' onChange={this.onChange} required>
                <option value="0"> Miss (1-14) </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="25"> Bull </option>
              </select>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='m2' onChange={this.onChangeMark} required>
                <option> Select </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
              </select>
            </div>
          </div>
        </div>

        {/* Dart #3 */}
        <div className='row'>
          <div className='col-md-2 col-lg-2'>
            <label> #3 </label>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='s3' onChange={this.onChange} required>
                <option value="0"> Miss (1-14) </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="25"> Bull </option>
              </select>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='m3' onChange={this.onChangeMark} required>
                <option> Select </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
              </select>
            </div>
          </div>
        </div>

        <button type='button' className='btn btn-dark' onClick={this.clearCounter}> Clear Score </button>
      </div>
    );
  }
}

export default ScoreCounter;
