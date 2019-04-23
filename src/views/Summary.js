import React, { Component } from 'react';

import store from '../Store.js';

class Summary extends Component {
  render() {
    const {sum} = this.props;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

class SummaryContainer extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }
  

  componentDidMount() {
    store.subscribe(this.onChange);
  };

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  onChange() {
    this.setState(this.getOwnState());
  }
  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum: sum };
  }

  render() {
    return ( <Summary sum={this.state.sum} />
    );
  }
}

export default SummaryContainer;