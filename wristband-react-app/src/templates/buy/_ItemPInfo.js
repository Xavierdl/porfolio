import React, { Component } from 'react';
// import ReactSVG from 'react-svg'
// import logo from '../../images/write-white.svg';
// import Counter from './_counter'

class itemPInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked: false, 
            firstName: '',
            lastName:'',
            email:''
        }
    }


    toggle() {
        this.setState({ checked: !this.state.checked });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };


        // this.props.sendToParent({total: data, id: this.props.item.id});
    
    render() {
        let box = ["global_item--container"];
        this.state.checked ? box.push("checked") : box.push("notchecked")
        return (
            <div key={this.props.item.id} >
                <div  className={box.join(' ')}>
                    <div className="item--container">
                        <div >
                            <h4 className="buy--item--title">{this.props.item.name}</h4>
                            <input className="first_name" name='firstName' type="text" placeholder='FIRST NAME OF WRISTBAND HOLDER' onChange={this.handleChange.bind(this)} value={this.state.firstName}/>
                            <input className="last_name" name='lastName' type="text" placeholder='LAST NAME OF WRISTBAND HOLDER' onChange={this.handleChange.bind(this)} value={this.state.lastName}/>
                            <input className="email" name='email' type="email" placeholder='EMAIL' onChange={this.handleChange.bind(this)} value={this.state.email}/>
                            <div className="policy--input">
                                <div onClick={this.toggle.bind(this)} className="checkbox" value={this.state.value}></div>
                                <p onClick={this.toggle.bind(this)} className="checkbox--explanation" value={this.state.value}>Use this email address for all wristband included in this order</p></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default itemPInfo;
