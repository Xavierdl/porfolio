import React, { Component } from 'react';


class Cash extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            addCash: 0
        };
    }

    handleChange(event) {
        this.setState({ addCash: event.target.value });
        this.props.sendToParent({ total: event.target.value ? parseInt(event.target.value, 10):0, id: this.props.item.id });
    };

    handleOther(){
        this.setState({ addCash:'' });
        this.addResult.focus(); 
    }

addCash(amount){
    this.setState({
        addCash: amount 
    })
    this.props.sendToParent({total: amount,id:this.props.item.id});
}

    render() {
      
        return (
            <div>
                <div className="item--container cash--container">
                    <h4 className="item--title">{this.props.item.name}</h4>
                    <h4 className="item--name">{this.props.item.firstName} {this.props.item.lastName}</h4>  
                    <div className="add_cash--container">
                        <div onClick={this.addCash.bind(this,5)} className="btn btn--cash" >5$</div>
                        <div onClick={this.addCash.bind(this, 10)} className="btn btn--cash">10$</div>
                        <div onClick={this.addCash.bind(this, 25)} className="btn btn--cash">25$</div>
                        <div onClick={this.handleOther.bind(this)} className="btn btn--cash" >OTHER</div>
                        <div onClick={this.addCash.bind(this, 0)} className="btn btn--cash remove">REMOVE</div>
                        <input 
                        ref={(input) => { this.addResult = input; }}  
                        type="number" 
                        className="cash--add" 
                        onChange={this.handleChange.bind(this)} 
                        value={this.state.addCash}/><span className='dollars'>$</span>    
                    </div>     
                </div>
            </div>

        );
    }
}
export default Cash;
