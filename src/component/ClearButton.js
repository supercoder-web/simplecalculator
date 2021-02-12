import React, { Component } from 'react';
import   './css/ClearButton.css';

class ClearButton extends Component {
    render() {
        return (
            <div className="clear-btn"  onClick={()=>this.props.clearClick()}>
                Clear
            </div>
        );
    }
}

export default ClearButton;