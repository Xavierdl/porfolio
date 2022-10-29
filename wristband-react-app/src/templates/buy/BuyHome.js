import React, { Component } from 'react';
import Header from '../components/_Header';
import Footer from '../components/_Footer';
import ItemsBuy from './_ItemsBuy';
// import { withRouter } from 'react-router'


class BuyHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        items: [],
        count: 0,
        cashTotal: {},
        total: 0,
        ajaxDetail:{}
    }

    }
    fetchLeave(){

        // fetch('http://brite4.ngrok.io/api/buyPassQte', { //url of the
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }// parses data to JSON
        // })
        //     .then(console.log(JSON.stringify([this.state.ajaxDetail,this.state.total])))
        //     .then(response => response.json()) //  parses response to JSON
        //     .then(data => console.log(data)) // JSON from `response.json()` call
        //     .catch(error => console.log(error)); // display error message

    }


    componentWillMount() {


        // fetch('https://jsonplaceholder.typicode.com/comments/')
        //     .then((response) => {
        //         console.log(response);
        //         response.json()
        //             .then((data) => {
        //                 console.log(data);
        //             });

        //     });

        // fetch('http://brite4.ngrok.io/api/packages')
        //     .then(response => response.json())//  parses response to JSON
        //     .then(data => this.setState({ items: data.data })) // put the Json to the state
        //     .catch(error => console.error(error))// display error message
        //     .then(console.log('Ajax ok'));
    }



    dataFromChildren({total, id, name, qte}) {
        let ajaxDetail = Object.assign(this.state.ajaxDetail, {
            [name]: qte
        })

        let cashTotalTemp = Object.assign({}, this.state.cashTotal, {
            [id]: total
        })

        this.setState({
            ajaxDetail,
            cashTotal : cashTotalTemp,
            total: Object.values(cashTotalTemp).reduce((accumulator, total) => accumulator + total)
        })
    }

    render() {

        return (
            <div className="buy--home page--bg ">
                <Header title="BUY YOUR PASS" />
                <div className="header_2--container">
                    <h3 className="header--buy_title">CHOOSE THE PASS THAT'S RIGHT FOR YOU!</h3>
                </div>
                <div className="header_2--compensator"></div>
                {this.state.items.map(item => (
                    <ItemsBuy key={item._id} sendToParent={this.dataFromChildren.bind(this)} item={item} /> ))}
                <div className="total--compensator"></div>
                <div className="total--container">
                    <h3 onClick={this.fetchLeave.bind(this)} >TOTAL FUND ADDED</h3> <h3 className='global--total'>{this.state.total} $</h3>
                </div>
                <Footer  sendAjax={this.fetchLeave.bind(this)} button="NEXT" link="/buy/policy" />
            </div>

        );
    }
}

export default BuyHome;
