import React, { Component } from 'react';
import Mark1 from '../../img/mark1.png';
import Mark2 from '../../img/mark2.png';
import Mark3 from '../../img/mark3.png';

class CurrentScore extends Component {
  render(){
    return(
      <div>
        { this.props.toClosed.show20 ? <div id='20' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[20] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[20] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[20] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[20] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[20] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[20] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <div className='row'>
              <div className='hor-center'>
                <h1> 20 </h1>
              </div>
            </div>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[20] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[20] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[20] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[20] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[20] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[20] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> 20 is closed </h3> }
        <hr/>
        { this.props.toClosed.show19 ? <div id='19' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[19] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[19] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[19] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[19] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[19] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[19] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <h1> 19 </h1>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[19] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[19] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[19] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[19] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[19] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[19] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> 19 is closed </h3> }
        <hr/>
        { this.props.toClosed.show18 ? <div id='18' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[18] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[18] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[18] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[18] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[18] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[18] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <h1> 18 </h1>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[18] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[18] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[18] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[18] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[18] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[18] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> 18 is closed </h3> }
        <hr/>
        { this.props.toClosed.show17 ? <div id='17' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[17] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[17] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[17] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[17] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[17] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[17] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <h1> 17 </h1>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[17] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[17] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[17] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[17] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[17] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[17] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> 17 is closed </h3> }
        <hr/>
        { this.props.toClosed.show16 ? <div id='16' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[16] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[16] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[16] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[16] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[16] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[16] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <h1> 16 </h1>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[16] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[16] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[16] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[16] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[16] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[16] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> 16 is closed </h3> }
        <hr/>
        { this.props.toClosed.show15 ? <div id='15' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[15] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[15] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[15] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[15] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[15] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[15] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <h1> 15 </h1>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[15] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[15] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[15] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[15] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[15] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[15] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> 15 is closed </h3> }
        <hr/>
        { this.props.toClosed.show25 ? <div id='Bull' className='row'>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[0].mark[25] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[0].mark[25] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[0].mark[25] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[1].mark[25] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[1].mark[25] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[1].mark[25] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-4 col-md-4 col-lg-4'>
            <h1> Bull </h1>
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[2].mark[25] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[2].mark[25] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[2].mark[25] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
          <div className='col-2 col-md-2 col-lg-2'>
            { this.props.players[3].mark[25] === 1 ? <img src={Mark1} alt='mark1' className='mark-resize' /> : null }
            { this.props.players[3].mark[25] === 2 ? <img src={Mark2} alt='mark2' className='mark-resize' /> : null }
            { this.props.players[3].mark[25] >= 3 ? <img src={Mark3} alt='mark3' className='mark-resize' /> : null }
          </div>
        </div> : <h3> Bull is closed </h3> }
      </div>
    );
  }
}

export default CurrentScore;
