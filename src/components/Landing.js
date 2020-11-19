import React, { Component } from 'react';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import TextSocial from '../logos/landing/SOCIAL MEDIA.svg'
import TextOverview from '../logos/landing/OVERVIEW.svg'
import TextMerch from '../logos/landing/MERCHANDISING.svg'
import TextInformation from '../logos/landing/INFORMATION.svg'
import Monogramme from '../logos/monogramme.svg'


export default class Landing extends Component {

    render() {

        return (
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="w-5/6 flex flex-col justify-center items-center">
                    <div className="flex flex-row w-full">

                        <img src={Monogramme} alt="Monogramme" className="cursor-default hover:opacity-0" style={{ height: "38vh", paddingBottom: "0.5vh", paddingRight:"2vh" }} />

                        <div className="w-full">
                            <Link to="/overview" >
                                <img src={TextOverview} alt="Overview" className="object-fill w-full cursor-default hover:opacity-0" style={{ height: "20vh" }} />
                            </Link>
                            <div style={{ height: "1vh" }}></div>

                            <Link to="/information">
                                <img src={TextInformation} alt="Information" className="object-fill w-full cursor-default hover:opacity-0" style={{ height: "17vh", paddingLeft: "1vh" }} />
                            </Link>
                        </div>
                    </div>

                    <div style={{ height: "1vh" }}></div>

                    <Link to="/merchandising">
                        <img src={TextMerch} alt="Merchandising" className="object-fill w-full cursor-default hover:opacity-0" style={{ height: "18vh" }} />
                    </Link>

                    <div style={{ height: "1vh" }}></div>

                    <Link to="/information">
                        <img src={TextSocial} alt="Social Media" className="object-fill w-full cursor-default hover:opacity-0" style={{ height: "18vh" }} />
                    </Link>
                </div>
            </div>



        );
    }
}


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
