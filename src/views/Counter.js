import React, { Component } from 'react';

import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';
import PropTypes from 'prop-types';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    console.log('enter constructor: ' + props.caption);
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }
  }

  /*
  getInitialState() {
    console.log('enter getInitialState');
  }
  getDefaultProps() {
    console.log('enter getDefaultProps');
  }
  */

  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  onClickIncrementButton() {
    Actions.increment(this.props.caption);
  }

  onClickDecrementButton() {
    Actions.decrement(this.props.caption);
  }

  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({count: newCount});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  render() {
    console.log('enter render ' + this.props.caption);
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired
};


export default Counter;