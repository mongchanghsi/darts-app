import React, { Component } from 'react';

class CurrentScore extends Component {
  render(){
    return(
      <div>
        <h1 className='large-score'> { this.props.score } </h1>
      </div>
    );
  }
}

export default CurrentScore;
