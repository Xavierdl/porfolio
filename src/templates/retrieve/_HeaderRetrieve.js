import React, { Component } from 'react';


class HeaderRetrieve extends Component {


  render() {
    return (
      <div className="header_2--container">
        {this.props.h2 ? <h2 className="header--retrieve_h2">{this.props.h2}</h2> : null}
        <h4 className="header--retrieve_h3 titre2">{this.props.h3}</h4>
      </div>      
       
        
    );
  }
}

export default HeaderRetrieve;
