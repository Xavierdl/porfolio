import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import logo from '../../images/write-white.svg';
import Counter from './_counter'

class ItemsRetrieve extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }






    // this.props.sendToParent({total: 30 * data, id: this.props.item.id});

    render() {

        return (
            <div>
                <div key={this.props.item.id} className="global_item--container">
                    <div className="item--container">
                        <div className="item_text">
                            <h4 className="buy--item--title">{this.props.item.name}</h4>
                            <p className="buy--item--name">Test</p>
                        </div>

                    </div>



                </div>
            </div>

        );
    }
}

export default ItemsRetrieve;
