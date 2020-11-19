import React, { Component } from 'react';
import '../styles/main.css';

export default class TextBlockLanding extends Component {

    componentDidMount() {
        let i;
        for (i = 0; i < 3; i++) {
            this.setState({
                initialFontSize: document.getElementsByClassName("resize")[i].style.fontSize = "100px",
            })

            let initialWidth = document.getElementsByClassName("resize")[i].offsetWidth;
            let fontSize = document.getElementsByClassName("resize")[i].style.fontSize;

            while (initialWidth >= 402) {
                fontSize = ( fontSize.substring(0,fontSize.length-2) - 0.5) + "px";
                initialWidth = document.getElementsByClassName("resize")[i].offsetWidth;
                document.getElementsByClassName("resize")[i].style.fontSize = fontSize;
            }
        }
    }


    render() {
        const { title } = this.props.artwork;
        const { year } = this.props.artwork;
        const { type } = this.props.artwork;
        const { place } = this.props.artwork;
        const { dimensions } = this.props.artwork;

        return (
            <div>
                <h1 className="parent flex flex-col justify-center items-center whitespace-no-wrap cursor-default" style={{ height: "55vh", width: "400px" }}>
                    <span className="resize">{title}</span>
                    <span className="resize">{year}, {type}, {place}</span>
                    <span className="resize">{dimensions}</span>
                </h1>
            </div>
        );

    }

}
