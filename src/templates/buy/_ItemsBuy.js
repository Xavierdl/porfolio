import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import logo from '../../images/write-white.svg';
import Counter from './_Counter';

class ItemsBuy extends Component {
constructor(props){
    super(props);
    this.state={
        showPopup: false,
        count: 0,
   
    }
}



 // OPEN THE COUNTER
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

// RECOVER DATA FROM COUNTER:
    dataFromChildren(data) {
        this.setState({
        // CLOSE THE COUNTER:
            showPopup: false,
        // RECOVER THE COUNT FROM COUNTER:
            count: data,
            

        });
        this.props.sendToParent({ total: this.props.item.price * data, id: this.props.item._id, name: this.props.item.name, qte: data});
    }

    render() {
      
        return (
            <div>
                <div key={this.props.item._id}  className="global_item--container">
                    <div onClick={this.togglePopup.bind(this)} style={this.state.count === 0 ? {background: "var(--orangered)"} : null} className="item--container">
                        <div className="item_text">
                            <h4 className="buy--item--title">{this.props.item.name}</h4>
                            <p className="buy--item--name">{this.props.item.shortDescription}</p>
                            <div className="btn btn--more">LEARN MORE</div>
                            <div className="open--more"></div>
                        </div>

                        <div className="item_quantity" >
                            <h3 className='total'>{this.props.item.price}$</h3>
                            <div className='quantity'>
                                <p>Quantity:</p>
                                <h3>{this.state.count}</h3>
                                <ReactSVG  path={logo} svgClassName="counter--pop_up btn" />
                            </div>
                        </div>
                    </div>
                    {/* LEARN MORE */}
                    {/* <div className="lear_more--container">
                <p className="buy--item--name">{this.props.item.body}</p>
            </div> */}


                </div>
                {this.state.showPopup ? <Counter countFromParent={this.state.count} sendToParent={this.dataFromChildren.bind(this)} /> :null}
            </div>

        );
    }
}

export default ItemsBuy;
