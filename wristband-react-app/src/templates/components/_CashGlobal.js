import React, { Component } from 'react';


class Cash extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            addCash: 0,
            
        };
    }

    render() {
      
        return (
            <div className="buy_item--container cash_global">
                <div className="card--item--container card_owner">
                    <h4 className="item--title">{this.props.item.name}</h4>
                    <div className="item_text">
                        <h4 className="item--name"> {this.props.item.firstName}</h4>
                        <h4 className="item--name last-name"> {this.props.item.lastName}</h4>
                        <h2 className="cash_global--total">{this.props.item.total} $</h2>
                    </div>
                </div>
                {this.props.item.fundAdded?
                <div className="item--under_menu card--item--container">
                    <h4>FUND ADDED TO WRISTBAND</h4>
                    <h4>+{this.props.item.fundAdded} $</h4>
                    </div> : null}

            </div>

        );
    }
}
export default Cash;
