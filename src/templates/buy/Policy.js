import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import image from '../../images/Bracelet-black.svg';
import ReactSVG from 'react-svg'


class Policy extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false }
    }

    toggle() {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        let box = ["page--bg", "Policy"];
        this.state.checked ? box.push("checked") : box.push("notchecked")
        
        return (
            <div className={box.join(' ')}>
                <Header title="" />
                <h3 className="explanation--red">Why should I get a wristband?</h3>
                <h3 className="explanation--title">your wristband is your pass to the park/attraction!</h3>

                <p className="explanation">Your wristband lets you:<br /> </p>
                <ul className="explanation--list">
                    <li>Access the park/attraction</li>
                    <li>Pay instantly for snacks and merch</li>
                    <li>Link your pass with family/friends</li>
                    <li>Take photos and save tham to your profile</li>
                    <li>Share posts instantly on social media</li>
                </ul>
                
                
                <ReactSVG path={image} svgClassName="policy--image" /> 
                    <h3 className="explanation--red">privacy Policy</h3>
                <p className="explanation Policy">We take your privacy seriously. We do not share your personal information with 3rd parties and your information does not last within our system longer than XXX months.<br/>
                You may read a detailed outline of our privacy policy here</p>
                <a className="policy--link" href="/">www.thelinkprivatepolicy.com</a>
                <div className="policy--input">
                    <div className="checkbox" onClick={this.toggle.bind(this)}></div>
                    <p className="checkbox--explanation" onClick={this.toggle.bind(this)}>I accept the policy</p>
                </div>
                <Footer button="NEXT" link="/buy/steps" alone checked={this.state.checked ? "checked" : null} />
            </div>
        );
    }
}

export default Policy;
