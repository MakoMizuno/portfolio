import React, { Component } from 'react'

export default class PortfolioItemButton extends Component {
    render(){
    const { children } = this.props;
    return <button className="PortfolioItem-button">{ children}</button>
    }
}