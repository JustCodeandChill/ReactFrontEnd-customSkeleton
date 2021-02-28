import React from 'react';
import { addressProperty } from './config/globalName';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    let defaultBool = false;
    this.state = {
      houseNumber: defaultBool,
      alleyLaneAddr: defaultBool,
      laneAddr: defaultBool,
      streetAddr: defaultBool,
      hamletAddr: defaultBool,
      communeAddr: defaultBool,
      wardAddr: defaultBool,
      districtAddr: defaultBool,
      cityAddr: defaultBool,
      provinceAddr: defaultBool,
    };
  }
  componentDidMount = () => {
    this.props.grabState(this.state);
  };

  handleCheckboxChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.checked;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Final state', this.state);
    this.props.grabState(this.state);
  };

  generateInput = (property) => {
    return (<input
      type="checkbox"
      name={property}
      checked={this.state[property]}
      onChange={this.handleCheckboxChange}
    />);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          {this.generateInput(addressProperty.houseNumber)}
          <label>Số nhà</label>

          {this.generateInput(addressProperty.alleyLaneAddr)}
          <label>Ngách (hoặc Hẻm)</label>

					{this.generateInput(addressProperty.laneAddr)}
          <label>Ngõ</label>

					{this.generateInput(addressProperty.streetAddr)}
          <label>Đường (hoặc Phố)</label>


					{this.generateInput(addressProperty.hamletAddr)}
          <label>Thôn (hoặc Xóm, Ấp)</label>

					{this.generateInput(addressProperty.communeAddr)}
          <label>Tổ (hoặc Xã)</label>

					{this.generateInput(addressProperty.wardAddr)}
          <label>Phường</label>

					{this.generateInput(addressProperty.districtAddr)}
          <label>Quận (hoặc Huyện)</label>

					{this.generateInput(addressProperty.cityAddr)}
          <label>Thành phố</label>

					{this.generateInput(addressProperty.provinceAddr)}
          <label>Tỉnh</label>
          <input type="submit" value="Khóa lựa chọn" />
        </form>
      </div>
    );
  }
}

export default CheckBox;
