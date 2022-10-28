import React, { Component } from 'react';
import Header from '../../components/_Header'
import StepHeader from '../../components/_StepHeader'
import Footer from '../../components/_Footer'
import Step5 from '../../../images/step5.svg';
import CashGlobal from '../../components/_CashGlobal'

class BuyGlobal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total:510,
            totalAdmission:310,
            totalFunds: 200,
            items: [{
                id: "0",
                name: "Pass VIP",
                lastName: "Santiago",
                firstName: "Julie",
                linked: "false",
                total:50
            },
                {
                    id: "1",
                    name: "Pass VIP",
                    lastName: "Santiago",
                    firstName: "Martin",
                    linked: "false",
                    fundAdded: 45,
                    total: 50
                },
                {
                    id: "3",
                    name: "Pass VIP",
                    lastName: "Laporte",
                    firstName: "Christine",
                    linked: "true",
                    cardNb: "4561xxxxxx7894",
                    total: 45
                },
                {
                    id: "4",
                    name: "Pass Famille",
                    lastName: "Laporte",
                    firstName: "Paul",
                    linked: "false",
                    fundAdded: 60,
                    total: 75

                },
                {
                    id: "5",
                    name: "Pass Famille",
                    lastName: "Laporte",
                    firstName: "Jacques",
                    linked: "false",
                    cardNb: "8561xxxxxx7590",
                    total: 200
                },]


        }
    }
    // componentWillMount() {

    //     fetch('http://brite4.ngrok.io/api/linkCardForm')
    //         .then(response => response.json())//  parses response to JSON
    //         .then(data => this.setState({ items: data.data })) // put the Json to the state
    //         .catch(error => console.error(error))// display error message
    //         .then(console.log('Ajax ok'));
    // }


    dataFromChildren({ total, id }) {

        this.setState({

        })
    }


    render() {
        return (
            <div className="page--bg buy--global step_compensator">
                <Header title="ADD FUND" />

                <StepHeader svg={Step5} title='PAY FOR YOUR ORDER' />
                {this.state.items.map(item => (
                    <CashGlobal key={item.id} item={item} />))}
                <div className="total--container admission_pass">
                    <h4>TOTAL - ADMINSSION PASSES</h4>
                    <h4 className="global--total">{this.state.totalAdmission} $</h4>
                </div>
                <div className="total--container fund_added">
                    <h4>TOTAL FUNDS ADDED</h4>
                    <h4 className="global--total">{this.state.totalFunds} $</h4>
                </div>
                <div className="total--container">
                    <h3>TOTAL</h3> 
                    <h3 className="global--total">{this.state.total} $</h3>
                </div>
                <Footer button="NEXT" link="/buy/global/paiement" />
            </div>
        );
    }
}

export default BuyGlobal;