import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import HeaderRetrieve from './_HeaderRetrieve'
import ItemsRetrieve from './_ItemsRetrieve'


class RetrievePrepurchase extends Component {

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

    componentWillMount() {

        // fetch('http://brite4.ngrok.io/api/personalInfo')

        //     .then(response => response.json())//  parses response to JSON
        //     .then(data => this.setState({ items: data.data.items, total: data.data.total })) // put the Json to the state
        //     .catch(error => console.error(error))// display error message
        //     .then(console.log('Ajax ok'));
    }

    render() {
        return (
            <div className="page--bg">
                <div className="retrieve--home">
                    <Header title="RETRIEVE ORDER" />
                    <HeaderRetrieve h3="HERE IS YOUR PRE-PURCHASED ORDER" />
                </div>
{this.state.items.map(item => (
                    <ItemsRetrieve key={item._id} item={item} />))}
                <Footer button="GET WRISTBANDS" link="/wristband/buy"/>
            </div>
        );
    }
}

export default RetrievePrepurchase;
