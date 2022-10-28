import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import image from '../../images/paid1.svg';
import ReactSVG from 'react-svg'


class Steps extends Component {

    render() {

        return (
            <div className="page--bg steps">
                <Header />
               <div className="header_2--container">
                <h3>JUST 4 MORE STEPS TO GO... </h3>
                    <ReactSVG path={image} svgClassName="steps--svg" />
                    <div className="steps--explanation">
                        <p>Enter info</p>
                        <p>Link a credit card</p>
                        <p>Add funds</p>
                        <p>Pay for order</p>
                    </div>
               </div> 
                 
                <Footer button="NEXT" link="/buy/personal-info" alone  />
            </div>
        );
    }
}

export default Steps;
