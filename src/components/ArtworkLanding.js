import React, { Component } from 'react';
import '../styles/main.css';


export default class ArtworkLanding extends Component {
    render() {
        const { img } = this.props.artwork;

        return (
            <img src={img} alt="artwork" className="object-contain z-0" style={{ height: "65vh", maxHeight: "600px", maxWidth: "75vw" }} />

            /*  <img src={img} alt="artwork" className="object-contain" style={{ height: "55vh", maxHeight: "500px", maxWidth: "75vw" }} /> */
        );
    }
}
