import React, { Component } from 'react';

class Help extends Component  {
    render() {
        return (
            <div className='help--container'>
                <div className='help--content'>
                    <h2 className="center" >{this.props.h1}</h2>
                    <p className="txt">{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Help;
