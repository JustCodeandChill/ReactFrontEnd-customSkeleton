import React from 'react';
import CheckBox from './CheckBox';
import InputText from './InputText';
import Result from './Result';
import { Container } from '@material-ui/core';

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

//  reset = () => {
//    this.setState({
//        generate: false,
//        addressInfo: {},
//        addressChoice: {}
//    })
//  }

  render() {
    return (
      <Container maxWidth="md">
        <CheckBox grabState={this.grabStateFromCheckBox} />
        <br/>
        <InputText
          grabState={this.grabStateFromInpuText}
          generate={this.generate}
          reset={this.reset}
          enable={this.state.addressChoice}
        />
        <p>Địa chỉ bằng Tiếng Anh</p>
        <Result addressInfo={this.state.addressInfo} generate={this.state.generate}/>
      </Container>
    );
  }
}

export default Form;
