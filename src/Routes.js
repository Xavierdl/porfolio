import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// HOME
import HomeLanguage from './templates/home/HomeLanguage';
import Home from './templates/home/Home';
// CHEKBALANCE
import CheckBalance from './templates/check-balance/CheckBalance';
// RETRIEVE
import RetrieveHome from './templates/retrieve/RetrieveHome';
import RetrievePrepurchase from './templates/retrieve/RetrievePrepurchase';
// WRISTBAND

import WBuy from './templates/Wristband/WBuy';
import WAddFund from './templates/Wristband/WAddFund';
import WAddFundEnd from './templates/Wristband/WAddFundEnd';
import WCheckBalance from './templates/Wristband/WCheckBalance';
// ADD FUND
import AddFundChoose from './templates/addFund/AddFundChoose';
import AddFundCash from './templates/addFund/AddFundCash';
// BUY
import BuyHome from './templates/buy/BuyHome';
import Policy from './templates/buy/Policy';
import Steps from './templates/buy/Steps';
import PersonalInfo from './templates/buy/PersonalInfo';
import BuyInfo from './templates/buy/BuyInfo';
// BUY CARD
import LinkCard from './templates/buy/buy-card/LinkCard';
import CardList from './templates/buy/buy-card/CardList';
// BUY CASH
import LinkCash from './templates/buy/buy-cash/LinkCash';
import CashList from './templates/buy/buy-cash/CashList';
// BUY GLOBAL
import BuyGlobal from './templates/buy/buy-global/BuyGlobal';
// PAIEMENT
import Paiement from './templates/paiement/Paiement';


class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
{/* HOME */}
                    <Route exact path='/' component={HomeLanguage} />
                    <Route exact path='/home' component={Home} />
{/* CHECK BALANCE */}
                    <Route exact path='/check-balance' component={CheckBalance} />
{/* RETRIEVE */}
                    <Route exact path='/retrieve' component={RetrieveHome} />
                    <Route exact path='/retrieve/prepurchase' component={RetrievePrepurchase} />
{/* WRISTBAND */}
                    <Route exact path='/wristband/buy' component={WBuy} />
                    <Route exact path='/wristband/add-fund' component={WAddFund} />
                    <Route exact path='/wristband/add-fund-end' component={WAddFundEnd} />
                    <Route exact path='/wristband/check-balance' component={WCheckBalance} />
{/* ADD FUND */}
                    <Route exact path='/add-fund/choose' component={AddFundChoose} />
                    <Route exact path='/add-fund/card-paiement' render={() => <Paiement back='/add-fund/choose' link='/wristband/add-fund-end' />} />
                    <Route exact path='/add-fund/cash' component={AddFundCash} />
                    <Route exact path='/add-fund/cash-paiement' render={() => <Paiement back='/add-fund/cash' link='/wristband/add-fund-end' noTotal />} />

                
{/* BUY */}
                    <Route exact path='/buy' component={BuyHome} />
                    <Route exact path='/buy/policy' component={Policy} />
                    <Route exact path='/buy/steps' component={Steps} />
                    <Route exact path='/buy/personal-info' component={PersonalInfo} />
                    <Route exact path='/buy/info' component={BuyInfo} />
                    
{/* BUY CARD */}
                    <Route exact path='/buy/link-card' component={LinkCard} />
                    <Route exact path='/buy/card-list' component={CardList} />
                    <Route exact path='/buy/card-paiement' render={() => <Paiement back='/buy/card-list' link='/buy/card-list' noTotal/>} />
{/* BUY CASH */}
                    <Route exact path='/buy/link-cash' component={LinkCash} />
                    <Route exact path='/buy/cash-list' component={CashList} />
{/* BUY GLOBAL */}
                    <Route exact path='/buy/global' component={BuyGlobal} />
                    <Route exact path='/buy/global/paiement' render={() => <Paiement back='/buy/global' link='/wristband/buy'/>} />
                   
                </Switch>
            </Router>
    
            );
        }
    }
    
export default Routes;
