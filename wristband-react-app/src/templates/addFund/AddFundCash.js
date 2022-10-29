import React, { Component } from 'react';
import Header from '../components/_Header'
import Footer from '../components/_Footer'
import Cash from '../components/_Cash'

class AddFundCash extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cashTotal: 0
        };
    }

    dataFromChildren({total}) {
        this.setState({
            cashTotal: total
        });
    }

    render() {
        return (
            <div className="page--bg cash">
                <Header title="RETRIEVE ORDER" />
                <Cash item={{id:0}}sendToParent={this.dataFromChildren.bind(this)}
              />
                <div className="total--container">
                    <h3>TOTAL FUND ADDED</h3> <h3 className='total'>{this.state.cashTotal} $</h3>
                </div>
                <Footer button="NEXT" link="/add-fund/cash-paiement" />
            </div>
        );
    }
}

export default AddFundCash;
