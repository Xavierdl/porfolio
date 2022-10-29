import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import video from '../../images/video.mp4';


class AddFundCard extends Component {
    render() {
        return (
            <div className="page--bg card">
                <Header title="RETRIEVE ORDER" />
                <video autoPlay className="video--card--container " src={video}/> 
                <div className="card--explanation">
                    <h3>PLEAZE INSERT OR TAP YOUR CREDIT/DEBIT CARD</h3>
                </div>
       
                <Footer button="CANCEL ORDER" link="/add-fund/choose" alone/>
            </div>
        );
    }
}

export default AddFundCard;
