import React, { Component } from 'react';
import DartsGIF from '../img/darts.gif';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render(){
    return(
      <div className='page-space'>
        <div className='row'>
          <div className='col-12 col-md-4 col-lg-4'>
            <img src={DartsGIF} alt='dartsgif' className='hor-center gif-resize'/>
          </div>
          <div className='col-12 col-md-4 col-lg-4'>
            <img src={DartsGIF} alt='dartsgif' className='hor-center gif-resize'/>
          </div>
          <div className='col-12 col-md-4 col-lg-4'>
            <img src={DartsGIF} alt='dartsgif' className='hor-center gif-resize'/>
          </div>
        </div>

        <p className='justify'> Welcome to Darts Scoreboard, a web-application for your ease of tracking your score for your darts game! My motivation for creating this web-application is because I do not own an electronic dartboard but rather the competitive version hence I had a hard time keep track my score while I'm practising! </p>
        <Link to='/setup'><button type='button' className='btn btn-dark'> Let's Start! </button></Link>
      </div>
    );
  }
}

export default Intro;
