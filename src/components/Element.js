import React, { Component } from 'react';
import { elements } from './_data';

export default class Element extends Component {
  state = {
    hover: false
  };

  openInfo = (event) => {
    if (this.props.enabled) this.props.showInfo(this.props.num);
  };

  onMouseEnter = (event) => {
    this.setState({ hover: true });
  };

  onMouseLeave = (event) => {
    this.setState({ hover: false });
  };

  render() {
    let { num } = this.props;
    let element = elements[num];
    return (
      <div
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        className={`element element-${num} ${element.category} ${
          this.state.hover && this.props.enabled ? 'active' : ''
        } ${!this.props.enabled ? 'disabled' : ''}`}>
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
      </div>
    );
  }
}
