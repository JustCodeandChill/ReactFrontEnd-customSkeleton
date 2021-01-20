import React from 'React';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    let defaultText = '';
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

  handleTextChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Final state', this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Số nhà</label>
          <input
            type="text"
            name="houseNumber"
            checked={this.state.houseNumber}
            onChange={this.handleTextChange}
            disabled={this.enable ? false : true}
          />

          <label>Tên ngách (hoặc Hẻm)</label>
          <input
            type="text"
            name="alleyLaneAddr"
            checked={this.state.alleyLaneAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên ngõ</label>
          <input
            type="text"
            name="laneAddr"
            checked={this.state.laneAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên đường (hoặc Phố)</label>
          <input
            type="text"
            name="streetAddr"
            checked={this.state.streetAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên thôn (hoặc Xóm, Ấp)</label>
          <input
            type="text"
            name="hamletAddr"
            checked={this.state.hamletAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên tổ (hoặc Xã)</label>
          <input
            type="text"
            name="communeAddr"
            checked={this.state.communeAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên phường</label>
          <input
            type="text"
            name="wardAddr"
            checked={this.state.wardAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên quận (hoặc Huyện)</label>
          <input
            type="text"
            name="districtAddr"
            checked={this.state.districtAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên thành phố</label>
          <input
            type="text"
            name="cityAddr"
            checked={this.state.cityAddr}
            onChange={this.handleTextChange}
          />

          <label>Tên tỉnh</label>
          <input
            type="text"
            name="provinceAddr"
            checked={this.state.provinceAddr}
            onChange={this.handleTextChange}
          />
          <br />
          <input type="submit" value="Chuyển địa chỉ sang Tiếng Anh" />
        </form>
      </div>
    );
  }
}

export default InputText;
