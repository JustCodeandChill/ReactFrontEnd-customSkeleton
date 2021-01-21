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

    console.log('In form', this.state);
  };

  render() {
    return (
      <div>
        <p>
          {this.state.addressInfo.houseNumber
            ? 'true'
            : this.state.addressInfo.houseNumber}
        </p>
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
