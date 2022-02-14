import React from 'react';

import buttonclasses from './Button.module.css';

class Button extends React.Component{
    render(){
        return(
            <button className={buttonclasses.button} type={this.props.type || 'button'} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

export default Button ;