import React, { Component } from 'react';
import Header from '../../components/_Header'
import StepHeader from '../../components/_StepHeader'
import Footer from '../../components/_Footer'
import Step4 from '../../../images/step4.svg';
import Cash from '../../components/_Cash'
import Card from '../../components/_Card'

class CashList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                id: "0",
                name: "Pass VIP",
                lastName: "Santiago",
                firstName: "Julie",
                linked: "false"
            },
                {
                    id: "1",
                    name: "Pass VIP",
                    lastName: "Santiago",
                    firstName: "Martin",
                    linked: "false"
                },
                {
                    id: "3",
                    name: "Pass VIP",
                    lastName: "Laporte",
                    firstName: "Christine",
                    linked: "true",
                    cardNb: "4561xxxxxx7894"
                },
                {
                    id: "4",
                    name: "Pass Famille",
                    lastName: "Laporte",
                    firstName: "Paul",
                    linked: "false"
                },
                {
                    id: "5",
                    name: "Pass Famille",
                    lastName: "Laporte",
                    firstName: "Jacques",
                    linked: "false",
                    cardNb: "8561xxxxxx7590"
                }],
            total: 0,
            cashTotal:{}
        }
    }

    // componentWillMount() {

    //     fetch('https://jsonplaceholder.typicode.com/comments/')
    //         .then(response => response.json())//  parses response to JSON
    //         .then(data => this.setState({ items: data })) // put the Json to the state
    //         .catch(error => console.error(error))// display error message
    //         .then(console.log('Ajax ok'));
    // }
    dataFromChildren({total,id}) {
        console.log({ total, id })
        let cashTotalTemp = Object.assign({}, this.state.cashTotal, {
            [id]: total
        })
        this.setState({
            cashTotal: cashTotalTemp,
            total: Object.values(cashTotalTemp).reduce((accumulator, total) => accumulator + total)
        })

    
    }


    render() {
        return (
            <div className="page--bg cash-list step_compensator">
                <Header title="ADD FUND" />

                <StepHeader svg={Step4} title='ENTER THE PERSONAL INFORMATION FOR EACH WRISTAND-HOLDER' />
                {this.state.items.slice(0, 8).map(item => (
                    <div>
                    {item.cardNb?
                    <Card sendToParent={this.dataFromChildren.bind(this)} item={item} hide />:
                    <Cash sendToParent={this.dataFromChildren.bind(this)} item={item} />}
                    </div>
                    ))}
                <div className="total--container">
                    <h3>TOTAL</h3> <h3 className='global--total'>{this.state.total}$</h3>
                </div>
                <Footer button="NEXT" link="/buy/global" />
            </div>
        );
    }
}

export default CashList;