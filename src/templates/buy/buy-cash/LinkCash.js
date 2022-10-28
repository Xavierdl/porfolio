import React, { Component } from 'react';
import Header from '../../components/_Header'
import StepHeader from '../../components/_StepHeader'
import Footer from '../../components/_Footer'
import ReactSVG from 'react-svg'
import Step4 from '../../../images/step4.svg';
import Star from '../../../images/Etoile-green.svg';
import LinkCashImg from '../../../images/link-cash.svg';
import { Link } from "react-router-dom";

class LinkCash extends Component {

    render() {
        
        return (
            <div className="page--bg choose-link step_compensator">
                <Header title="add fund" />
                <StepHeader svg={Step4} title='INSERT MONEY IN YOUR WRISTBAND' />

                <div className="link--container">
                    <h3>DO YOU WANT TO ADD FUNDS TO YOUR WRISTBAND?</h3>
                    <ReactSVG path={LinkCashImg} svgClassName="link-wri" />
                    <div className="btn--container">
                        <Link to="/buy/cash-list"> <div className="btn btn--green">YES</div> </Link>
                        <Link to="/"><div className="btn btn--red" >NO</div> </Link>
                    </div>
                </div>
                <div className="star">
                    <ReactSVG path={Star} svgClassName="star--svg" />
                    <h3>WHAT ARE THE PLUS? </h3>
                    <ReactSVG path={Star} svgClassName="star--svg" />
                </div>
                <ul>
                    <li>Pay instantly with a simple scan</li>
                    <li>No need to top-up funds during the day</li>
                    <li>Get a digital receipt for each transaction</li>
                </ul>



                <Footer />
            </div>
        );
    }
}

export default LinkCash;
