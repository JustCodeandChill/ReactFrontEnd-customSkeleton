import React from 'React';
import { addressProperty } from './config/globalName';

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
    this.props.generate();
  };

  generateInput = (property) => {
		let enable = this.props.enable;
    return (<input
      type="text"
      name={property}
      checked={this.state[property]}
      onChange={this.handleTextChange}
      disabled={enable[property] ? '' : 'disabled'}
    />);
  };
  render() {
    let enable = this.props.enable;
    console.log('Enable', enable);
    console.log('props: ', this.props);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Số nhà</label>
					{this.generateInput(addressProperty.houseNumber)}

          <label>Tên ngách (hoặc Hẻm)</label>
					{this.generateInput(addressProperty.alleyLaneAddr)}

          <label>Tên ngõ</label>
					{this.generateInput(addressProperty.laneAddr)}

          <label>Tên đường (hoặc Phố)</label>
					{this.generateInput(addressProperty.streetAddr)}

          <label>Tên thôn (hoặc Xóm, Ấp)</label>
					{this.generateInput(addressProperty.hamletAddr)}

          <label>Tên tổ (hoặc Xã)</label>
					{this.generateInput(addressProperty.communeAddr)}

          <label>Tên phường</label>
					{this.generateInput(addressProperty.wardAddr)}

          <label>Tên quận (hoặc Huyện)</label>
					{this.generateInput(addressProperty.districtAddr)}

          <label>Tên thành phố</label>
					{this.generateInput(addressProperty.cityAddr)}

          <label>Tên tỉnh</label>
					{this.generateInput(addressProperty.provinceAddr)}
          <br />
          <input type="submit" value="Chuyển địa chỉ sang Tiếng Anh" />
        </form>
        <input type="button" value="Reset" onClick={this.props.reset} />
      </div>
    );
  }
}

export default InputText;
