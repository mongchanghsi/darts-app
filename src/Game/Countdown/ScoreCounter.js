import React, { Component } from 'react';

class ScoreCounter extends Component {
  constructor(props){
    super(props);

    this.state = {
      s1: 0,
      s2: 0,
      s3: 0,
      m1: 1,
      m2: 1,
      m3: 1,
      roundScore: 0,
      darts: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    let score = e.target.id;
    let mark = e.target.value;
    this.setState({ [score]: mark }, () => { // callback hell, please improvise this
      let dartOne = parseInt(this.state.s1) * parseInt(this.state.m1);
      let dartTwo = parseInt(this.state.s2) * parseInt(this.state.m2);
      let dartThree = parseInt(this.state.s3) * parseInt(this.state.m3);
      let totalRoundScore = dartOne + dartTwo + dartThree;
      this.setState({ roundScore: totalRoundScore }, () => {
        this.props.roundScoreUpdate(this.state.roundScore)
      })
    })
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
                <option value="0"> Miss (0) </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
                <option value="13"> 13 </option>
                <option value="14"> 14 </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="50"> Bull </option>
              </select>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='m1' onChange={this.onChange} required>
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
                <option value="0"> Miss (0) </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
                <option value="13"> 13 </option>
                <option value="14"> 14 </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="50"> Bull </option>
              </select>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='m2' onChange={this.onChange} required>
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
                <option value="0"> Miss (0) </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
                <option value="10"> 10 </option>
                <option value="11"> 11 </option>
                <option value="12"> 12 </option>
                <option value="13"> 13 </option>
                <option value="14"> 14 </option>
                <option value="15"> 15 </option>
                <option value="16"> 16 </option>
                <option value="17"> 17 </option>
                <option value="18"> 18 </option>
                <option value="19"> 19 </option>
                <option value="20"> 20 </option>
                <option value="50"> Bull </option>
              </select>
            </div>
          </div>

          <div className='col-md-5 col-lg-5'>
            <div className='form-group'>
              <select className='custom-select' id='m3' onChange={this.onChange} required>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCounter;
