import React from 'React';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    let defaultText = null;

    this.disabled = true;
    this.state = {
      houseNumber: defaultText,
      alleyLaneAddr: defaultText,
      laneAddr: defaultText,
      streetAddr: defaultText,
      hamletAddr: defaultText,
      communeAddr: defaultText,
      wardAddr: defaultText,
      districtAddr: defaultText,
      cityAddr: defaultText,
      provinceAddr: defaultText,
    };
  }
  componentDidMount = () => {
    this.props.grabState(this.state);
  };

  handleTextChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState({
      [name]: value,
    });

    console.log(this.state);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.grabState(this.state);
  };

  render() {
    let enable = this.props.enable;
    console.log('Enable', enable);
    ////let b;
    ////if (enable.houseNumber) {
    ////  b = (
    ////    <input
    ////      type="text"
    ////      name="houseNumber"
    ////      checked={this.state.houseNumber}
    ////      onChange={this.handleTextChange}
    ////    />
    ////  );
    ////} else {
    ////  b = (
    ////    <input
    ////      type="text"
    ////      name="houseNumber"
    ////      checked={this.state.houseNumber}
    ////      onChange={this.handleTextChange}
    ////      disabled
    ////    />
    ////  );
    //}

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Số nhà</label>
          <input
            type="text"
            name="houseNumber"
            checked={this.state.houseNumber}
            onChange={this.handleTextChange}
            disabled={enable.houseNumber ? '' : 'disabled'}
          />

          <label>Tên ngách (hoặc Hẻm)</label>
          <input
            type="text"
            name="alleyLaneAddr"
            checked={this.state.alleyLaneAddr}
            onChange={this.handleTextChange}
            disabled={enable.alleyLaneAddr ? '' : 'disabled'}
          />

          <label>Tên ngõ</label>
          <input
            type="text"
            name="laneAddr"
            checked={this.state.laneAddr}
            onChange={this.handleTextChange}
            disabled={enable.laneAddr ? '' : 'disabled'}
          />

          <label>Tên đường (hoặc Phố)</label>
          <input
            type="text"
            name="streetAddr"
            checked={this.state.streetAddr}
            onChange={this.handleTextChange}
            disabled={enable.streetAddr ? '' : 'disabled'}
          />

          <label>Tên thôn (hoặc Xóm, Ấp)</label>
          <input
            type="text"
            name="hamletAddr"
            checked={this.state.hamletAddr}
            onChange={this.handleTextChange}
            disabled={enable.hamletAddr ? '' : 'disabled'}
          />

          <label>Tên tổ (hoặc Xã)</label>
          <input
            type="text"
            name="communeAddr"
            checked={this.state.communeAddr}
            onChange={this.handleTextChange}
            disabled={enable.communeAddr ? '' : 'disabled'}
          />

          <label>Tên phường</label>
          <input
            type="text"
            name="wardAddr"
            checked={this.state.wardAddr}
            onChange={this.handleTextChange}
            disabled={enable.wardAddr ? '' : 'disabled'}
          />

          <label>Tên quận (hoặc Huyện)</label>
          <input
            type="text"
            name="districtAddr"
            checked={this.state.districtAddr}
            onChange={this.handleTextChange}
            disabled={enable.districtAddr ? '' : 'disabled'}
          />

          <label>Tên thành phố</label>
          <input
            type="text"
            name="cityAddr"
            checked={this.state.cityAddr}
            onChange={this.handleTextChange}
            disabled={enable.cityAddr ? '' : 'disabled'}
          />

          <label>Tên tỉnh</label>
          <input
            type="text"
            name="provinceAddr"
            checked={this.state.provinceAddr}
            onChange={this.handleTextChange}
            disabled={enable.provinceAddr ? '' : 'disabled'}
          />
          <br />
          <input type="submit" value="Chuyển địa chỉ sang Tiếng Anh" />
        </form>
      </div>
    );
  }
}

export default InputText;
