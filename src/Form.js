import React from 'react';
import CheckBox from './CheckBox';
import InputText from './InputText';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressChoice: {},
      addressInfo: {},
    };
  }

  grabStateFromCheckBox = (state) => {
    this.setState({
      addressChoice: state,
    });
  };

  grabStateFromInpuText = (state) => {
    this.setState({
      addressInfo: state,
    });
  };

  render() {
    return (
      <div>
        <CheckBox grabState={this.grabStateFromCheckBox} />
        <InputText
          grabState={this.grabStateFromInpuText}
          enable={this.state.addressChoice}
        />
      </div>
    );
  }
}

export default Form;
