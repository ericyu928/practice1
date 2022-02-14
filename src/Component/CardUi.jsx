import React from "react";

import cardclass from './CardUi.module.css';

class CardUi extends React.Component {

    render() {
        return (
            <div className={`${cardclass.card} ${this.props.className}`}>{this.props.children}</div>
        )
    }
}

export default CardUi;