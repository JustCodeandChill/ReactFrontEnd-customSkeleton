import React from 'react';
import CheckBox from './CheckBox';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {}
    };
  }

  grabInitialState = (state) => {
    this.setState({
      address: state,
    });
  };

  render() {
    console.log(this.state);
    return (
        <CheckBox grabInitialState={this.grabInitialState} />
    );
  }
}

export default Form;
