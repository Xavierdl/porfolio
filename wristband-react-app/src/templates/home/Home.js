import React, { Component } from 'react';
import logo from '../../images/logo.png';
import HomeButton from './_HomeButton'
import Footer from '../components/_Footer';
import retrieve from '../../images/recuperer.svg';
import add from '../../images/remplir-white.svg';
import balance from '../../images/solde.svg';
import buy from '../../images/achat-white.svg';

class Home extends Component {
    render() {
        return (<div>
            <div className="home--container">
                <img className="home--logo" src={logo} alt="logo"/>
                <div className="home--btn_container">  
                
                    <HomeButton content='BUY YOUR PASS' link='/buy' svg={buy}/>
                    <HomeButton content='RETRIEVE ORDER' link='/retrieve' svg={retrieve}  />
                    <HomeButton content='ADD FUNDS' link='/wristband/add-fund' svg={add}/>
                    <HomeButton content='CHECK BALANCE' link='/wristband/check-balance' svg={balance}/>
                </div>
            </div>
            
            <Footer />
            </div>
        );
    }
}

export default Home;