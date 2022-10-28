import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import ReactSVG from 'react-svg'
import image from '../../images/add-fund-retrieve.svg';



class CheckBalance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }


    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())//  parses response to JSON
            .then(data => this.setState({ items: data })) // put the Json to the state
            .catch(error => console.error(error))// display error message
            .then(console.log('Ajax ok'));
    }



    render() {
        const ItemsContent = this.state.items.slice(0, 1).map(item => (

            <div key={item.id} className="item--container">
                <h4 className="item--title">VIP ADMINSSION - EMPTY WRISTBAND</h4>
                <div className="item_text">
                    <h4 className="item--name">{item.name}</h4>
                    <h4 className="cash--add balance" >{/*this.props.item.total*/}2 $</h4>
                </div>
            </div>
        ))

        return (
            <div className="retrieve--container">
                <div className="retrieve--choose">
                    <Header title="CHECK BALANCE" />
                    <div className="header_2--container header--choose">
                        <h4 className="header--choose--h4">JUST A FEW QUICK STEPS TO TURN YOU WRISTBAND INOT YOUR WALLET!</h4>
                        <ReactSVG path={image} svgClassName="choose--image" />
                        <div className="retrieve--compensator"></div>
                    </div>
                </div>

                <div className="choose--items">
                    {ItemsContent}

                </div>
               


                <Footer link="/wristband-first" />
            </div>
        );
    }
}

export default CheckBalance;
