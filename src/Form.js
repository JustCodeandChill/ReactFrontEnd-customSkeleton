import React from 'react';
import CheckBox from './CheckBox';
import InputText from './InputText';
import Result from './Result';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressChoice: {},
      addressInfo: {},
      generate: false
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

  generate = () => {
    this.setState({
        generate: !this.state.generate
    })
  }

  reset = () => {
    this.setState({
        generate: false
    })
  }

  render() {
    return (
      <div>
        <CheckBox grabState={this.grabStateFromCheckBox} />
        <InputText
          grabState={this.grabStateFromInpuText}
          generate={this.generate}
          reset={this.reset}
          enable={this.state.addressChoice}
        />
        <Result addressInfo={this.state.addressInfo} generate={this.state.generate}/>
      </div>
    );
  }
}

export default Form;
