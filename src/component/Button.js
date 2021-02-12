import React, { Component } from 'react';
import './css/Button.css'

class Button extends Component {
    isOperator = val=>{
        return val==="*"||val==="+"||val==="/"||val==="-";
    };
    render() {
        return (
            <div className={this.isOperator(this.props.children)?'button operator':'button '}  onClick={()=>this.props.handleClick(this.props.children)}>
               
                {this.props.children}

            </div>
        );
    }
}

export default Button;