import React, { Component } from 'react';
import '../styles/main.css';

export default class TextBlockProduct extends Component {

    componentDidMount() {
        let i;
        for (i = 0; i < 5; i++) {
            this.setState({
                initialFontSize: document.getElementsByClassName("resize")[i].style.fontSize = "100px",
            })

            let initialWidth = document.getElementsByClassName("resize")[i].offsetWidth;
            let fontSize = document.getElementsByClassName("resize")[i].style.fontSize;

            while (initialWidth >= 300) {
                fontSize = ( fontSize.substring(0,fontSize.length-2) - 0.5) + "px";
                initialWidth = document.getElementsByClassName("resize")[i].offsetWidth;
                document.getElementsByClassName("resize")[i].style.fontSize = fontSize;
            }
        }
    }

    render() {
        const { title } = this.props.product;
        const { price } = this.props.product;
        const { type } = this.props.product;

        return (
            <div>
                <h1 className="parent flex flex-col justify-center items-center whitespace-no-wrap cursor-default uppercase" style={{ width: "300px" }}>
                    <span className="resize">{type}</span>
                    <span className="resize">{title}</span>
                    <span className="resize">COTON BIO</span>
                    <span className="resize">PRIX {price} EUROS</span>
                    <span className="resize">TAILLE XL</span>
                </h1>
            </div>
        );

    }

}
