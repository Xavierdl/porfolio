import React, { Component } from 'react';
import Header from '../../components/_Header'
import StepHeader from '../../components/_StepHeader'
import Footer from '../../components/_Footer'
import Step4 from '../../../images/step4.svg';
import Card from '../../components/_Card'

class CardList extends Component {
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
                }]


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
            <div className="page--bg card-list step_compensator">
                <Header title="ADD FUND" />

                <StepHeader svg={Step4} title='ENTER THE PERSONAL INFORMATION FOR EACH WRISTAND-HOLDER' />
                {this.state.items.map(item => (
                    <Card key={item.id} sendToParent={this.dataFromChildren.bind(this)} item={item} />))}
              
                <Footer button="NEXT" link="/buy/link-cash" />
            </div>
        );
    }
}

export default CardList;