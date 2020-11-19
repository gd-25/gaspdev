import React, { Component } from 'react';
import '../styles/main.css';


export default class Artwork extends Component {
  render() {
    const { img } = this.props.artwork;

    return (
      <div className="m-4">
          <img src={img} alt="artwork" className="object-contain h-64 cursor-default hover:opacity-0"/>
      </div>
    );

  }
    
  }
  