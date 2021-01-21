import React from 'react';

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            name="houseNumber"
            checked={this.state.houseNumber}
            onChange={this.handleCheckboxChange}
          />
          <label>Số nhà</label>

          <input
            type="checkbox"
            name="alleyLaneAddr"
            checked={this.state.alleyLaneAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Ngách (hoặc Hẻm)</label>

          <input
            type="checkbox"
            name="laneAddr"
            checked={this.state.laneAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Ngõ</label>

          <input
            type="checkbox"
            name="streetAddr"
            checked={this.state.streetAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Đường (hoặc Phố)</label>

          <input
            type="checkbox"
            name="hamletAddr"
            checked={this.state.hamletAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Thôn (hoặc Xóm, Ấp)</label>

          <input
            type="checkbox"
            name="communeAddr"
            checked={this.state.communeAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Tổ (hoặc Xã)</label>

          <input
            type="checkbox"
            name="wardAddr"
            checked={this.state.wardAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Phường</label>

          <input
            type="checkbox"
            name="districtAddr"
            checked={this.state.districtAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Quận (hoặc Huyện)</label>

          <input
            type="checkbox"
            name="cityAddr"
            checked={this.state.cityAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Thành phố</label>

          <input
            type="checkbox"
            name="provinceAddr"
            checked={this.state.provinceAddr}
            onChange={this.handleCheckboxChange}
          />
          <label>Tỉnh</label>
          <input type="submit" value="Khóa lựa chọn" />
        </form>
      </div>
    );
  }
}

export default CheckBox;
