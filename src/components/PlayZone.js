import React, { Component } from 'react';
import '../styles/main.css';
import { ArtworkConsumer, artworkDataLength } from '../context';
import ArtworkLanding from './ArtworkLanding';
import TextBlockLanding from './TextBlockLanding';


let artworkChangeCount = 0;
let artworkChangeRythm = 20;


export default class PlayZone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 54,
            displayArtwork: true,
            displayInfo: false,
        }
        this.pickRandomArtwork = this.pickRandomArtwork.bind(this);
        this.computeMouseMoves = this.computeMouseMoves.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    computeMouseMoves() {
        artworkChangeCount = artworkChangeCount + 1;

        if (artworkChangeCount > artworkChangeRythm) {
            artworkChangeCount = 0;
            this.pickRandomArtwork()
        }

    }

    pickRandomArtwork() {
        this.setState({
            randomNumber: Math.floor((Math.random() * (artworkDataLength - 1)) + 1)
        })
    }

    toggleDisplay() {
        this.setState({
            displayArtwork: !this.state.displayArtwork,
            displayInfo: !this.state.displayInfo,
        });
    }

    render() {

        return (
            <div className="flex flex-col justify-center items-center h-screen w-full">

                <ArtworkConsumer>
                    {(context) => {

                        return <div className="flex flex-col justify-center items-center h-screen w-full text-4xl leading-tight" onMouseMove={this.computeMouseMoves} onClick={this.toggleDisplay} >

                            {/*<div style={{ display: this.state.displayInfo ? 'flex' : 'none' }} >
                                <h1 className="parent flex flex-col justify-center items-center whitespace-no-wrap bg-red-300" style={{ height: "55vh", width: "400px" }}>
                                    <span id="test">{context.artworks[this.state.randomNumber].title}</span>
                                    <span>{context.artworks[this.state.randomNumber].year}, {context.artworks[this.state.randomNumber].type}, {context.artworks[this.state.randomNumber].place}</span>
                                    <span>{context.artworks[this.state.randomNumber].dimensions}</span>

                                </h1>
                            </div>*/}
                
                            { this.state.displayInfo && <TextBlockLanding key={context.artworks[this.state.randomNumber].id} artwork={context.artworks[this.state.randomNumber]} /> }
                            { this.state.displayArtwork && <ArtworkLanding key={context.artworks[this.state.randomNumber].id} artwork={context.artworks[this.state.randomNumber]} /> }

                        </div>
                    }}
                </ArtworkConsumer>




            </div>
        );
    }
}



/*
<div className="flex flex-row w-screen">

                    <img src={Monogramme} style={{ height: "50vh" }} className="pt-20 pb-2 pr-4 pl-24 cursor-default hover:opacity-0" />

                    <div className="flex-col">
                        <Link to="/overview" >
                            <img src={TextOverview} className="object-fill w-full pt-20 pb-2 pr-24 cursor-default hover:opacity-0" style={{ height: "30vh" }} />
                        </Link>
                        <Link to="/information">
                            <img src={TextInformation} className="object-fill w-full pb-2 pr-24 cursor-default hover:opacity-0" style={{ height: "20vh" }} />
                        </Link>
                    </div>
                </div>

                <Link to="/merch">
                    <div className="w-full px-24 cursor-default">
                        <img src={TextMerch} className="object-fill w-full pb-2 cursor-default hover:opacity-0" style={{ height: "18vh" }} />
                    </div>
                </Link>
                <Link to="/">
                    <div className="w-full px-24 cursor-default">
                        <img src={TextSocial} className="object-fill w-full pb-20 cursor-default hover:opacity-0 " style={{ height: "29vh" }} />
                    </div>
                </Link>
*/

/*
<div className="bg-green-400 font-bold leading-none w-screen">
                <div className="text-4xl">This is the landing page</div>
                <Link to="/overview">
                    <h1 style={{ fontSize: "22vw", lineHeight: "17vw" }} className="tracking-tighter">OVERVIEW</h1>
                </Link>
                <Link to="/bio">
                    <h1 style={{ fontSize: "22vw", lineHeight: "17vw" }} className="tracking-tighter">BIOGRAPHY</h1>
                </Link>
                <Link to="/merch">
                    <h1 style={{ fontSize: "20vw", lineHeight: "17vw" }} className="text-center tracking-tighter">MERCH  BIO</h1>
                </Link>
</div>
*/
