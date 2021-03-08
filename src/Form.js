import React from 'react';
import Introduction from './Introduction';
import Instruction from './Instruction';
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
      generate: false,
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
      generate: !this.state.generate,
    });
  };

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
        <Introduction />
        <Instruction />
        <h2>Bước 1: Chọn ô</h2>
        <CheckBox grabState={this.grabStateFromCheckBox} />
        <br />
        <h2>Bước 2: Điền địa chỉ</h2>
        <InputText
          grabState={this.grabStateFromInpuText}
          generate={this.generate}
          reset={this.reset}
          enable={this.state.addressChoice}
        />
        <h2>Bước 3: Sao chép kết quả</h2>
        <p>Địa chỉ của bạn bằng Tiếng Anh</p>
        <Result
          addressInfo={this.state.addressInfo}
          generate={this.state.generate}
        />
      </Container>
    );
  }
}

export default Form;
