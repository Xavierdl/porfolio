import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }






    // this.props.sendToParent({total: 30 * data, id: this.props.item.id});

    render() {
        
            let hide = !this.props.hide ?  "buy_item--container" : "buy_item--container hide";

        return (
          
            <div key={this.props.item.id} className={hide} >
                <div className="card--item--container card_owner">
                    <h4 className="item--title">{this.props.item.name}</h4>
                        <div className="item_text">
                        <h4 className="item--name">{this.props.item.firstName} {this.props.item.lastName}</h4> 
                        
                        {!this.props.hide && !this.props.item.cardNb?
                        <Link to="/buy/card-paiement"><div className="btn btn--green">LINK<br />A CREDIT CARD</div></Link> 
                        : null}
                        {!this.props.hide && this.props.item.cardNb ? 
                        <Link to="/"><div className="btn btn--red">REMOVE<br />THIS CARD</div></Link> 
                        : null}
                        </div>
                    </div>

                {this.props.item.cardNb ? 
                    <h4 className="item--under_menu card--item--container ">{this.props.item.cardNb}</h4>
                :null}
                </div> 
               
  

        );
    }
}

export default Card;
