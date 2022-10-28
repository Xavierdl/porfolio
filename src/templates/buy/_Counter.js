import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.countFromParent
        }
    }

// INCREMENT THE COUNTER
    more() {
        this.setState({ count: this.state.count + 1 });
    }
// DECREMENT THE COUNTER

    less() {
        
        if(this.state.count>0){ 
            this.setState({ count: this.state.count - 1 })
        }
         
    }
// SEND THE ORDER TO CLOSE THE COUNTER TO THE ITEM COMPONENT:
    handleCancel(){
        this.props.sendToParent(this.props.countFromParent);
       
    }
        
    
// SEND THE ORDER TO CLOSE THE COUNTER TO THE ITEM COMPONENT AND SEND RESULTE OF THE COUNTER:
    handleConfirm() {
        this.props.sendToParent(this.state.count);
    }

    render() {
        return (
            <div className='help--container counter'>
                <div className='help--content'>
                    <h2 className="counter--title center" >QUANTITY</h2>
                    <h4 className='counter--description'>SELECT THE QUANTITY YOU WOULD LIKE TO PURCHASE:</h4>
                    <h4 className="counter--name">vip pass</h4>
                    <p className="txt">{this.props.content}</p>
                    <div className="result--container">
                        <h4 className="btn counter--btn" onClick={this.less.bind(this)}>-</h4>
                        <h4 className="result">{this.state.count}</h4>
                        <h4 className="btn counter--btn" onClick={this.more.bind(this)}>+</h4>
                    </div>
                    <div className="btn--container">
                        <div className="btn btn--green" onClick={this.handleConfirm.bind(this)}>CONFIRM</div>
                        <div className="btn btn--red" onClick={this.handleCancel.bind(this)} >CANCEL</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
