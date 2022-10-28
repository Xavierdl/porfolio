import React, { Component } from 'react';


class ItemsRetrieve extends Component {


    render() {

            
          
   
        return (
            
                <div key={this.props.item.id} className="item--container">
                <h4 className="item--title">{this.props.item.name} - EMPTY WRISTBAND</h4>
                <h4 className="item--name">{this.props.item.lastName} {this.props.item.firstName}</h4>
                </div>
            

        );
    }
}

export default ItemsRetrieve;
