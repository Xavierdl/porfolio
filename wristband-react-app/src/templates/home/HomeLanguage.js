import React, { Component } from 'react';
import logo from '../../images/logo.png';
import HomeButton from './_HomeButton'

class HomeLanguage extends Component {
    render() {
        return (
            <div>
                <img className="home--logo" src={logo} alt="logo" />
                <div className="home--btn_container">
                    <HomeButton content='FRANCAIS' link='/home' />
                    <HomeButton content='ENGLISH' link='/home' icon='' />
                </div>
            </div>
        );
    }
}

export default HomeLanguage;