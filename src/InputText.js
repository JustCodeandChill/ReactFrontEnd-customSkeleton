import React from 'React';
import { Grid } from '@material-ui/core';
import { addressProperty } from './config/globalName';
let defaultText = null;

class InputText extends React.Component {
  constructor(props) {
    super(props);
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
      reset: false,
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
    return (
      <input
        type="text"
        name={property}
        checked={this.state[property]}
        onChange={this.handleTextChange}
        disabled={enable[property] ? '' : 'disabled'}
        value={this.state[property] ? this.state[property] : ''}
      />
    );
  };

  reset = () => {
    this.setState({
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
    });
  };

  render() {
    console.log('props: ', this.props);
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={6}>
            <label>Số nhà</label>
            {this.generateInput(addressProperty.houseNumber)}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <label>Tên ngách (hoặc Hẻm)</label>
            {this.generateInput(addressProperty.alleyLaneAddr)}
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            {' '}
            <label>Tên ngõ</label>
            {this.generateInput(addressProperty.laneAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            {' '}
            <label>Tên đường (hoặc Phố)</label>
            {this.generateInput(addressProperty.streetAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <label>Tên thôn (hoặc Xóm, Ấp)</label>
            {this.generateInput(addressProperty.hamletAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <label>Tên tổ (hoặc Xã)</label>
            {this.generateInput(addressProperty.communeAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <label>Tên phường</label>
            {this.generateInput(addressProperty.wardAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <label>Tên quận (hoặc Huyện)</label>
            {this.generateInput(addressProperty.districtAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <label>Tên thành phố</label>
            {this.generateInput(addressProperty.cityAddr)}
          </Grid>

          <Grid item xs={12} sm={4} md={6}>
            <label>Tên tỉnh</label>
            {this.generateInput(addressProperty.provinceAddr)}
          </Grid>

          <br />
        </Grid>
        <input type="submit" value="Chuyển địa chỉ sang Tiếng Anh" />
        <input type="button" value="Xóa địa chỉ đã nhập" onClick={this.reset} />
      </form>
    );
  }
}

export default InputText;
