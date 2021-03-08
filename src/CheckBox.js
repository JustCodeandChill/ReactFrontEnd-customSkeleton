import React from 'react';
import { addressProperty } from './config/globalName';
import { Grid } from '@material-ui/core';
import './styles/checkbox.css';

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
    this.props.grabState(this.state);
  };

  generateInput = (property) => {
    return (
      <input
        type="checkbox"
        name={property}
        checked={this.state[property]}
        onChange={this.handleCheckboxChange}
        className="regular-checkbox"
      />
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend className="legend">Chọn Ô</legend>
            <Grid container spacing={1}>
              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.houseNumber)}
                <label>Số nhà</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.alleyLaneAddr)}
                <label>Ngách (hoặc Hẻm)</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.laneAddr)}
                <label>Ngõ</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.streetAddr)}
                <label>Đường (hoặc Phố)</label>
                <br />
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.hamletAddr)}
                <label>Thôn (hoặc Xóm, Ấp)</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.communeAddr)}
                <label>Tổ (hoặc Xã)</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.wardAddr)}
                <label>Phường</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.districtAddr)}
                <label>Quận (hoặc Huyện)</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.cityAddr)}
                <label>Thành phố</label>
              </Grid>

              <Grid container item xs={12} sm={6} md={6}>
                {this.generateInput(addressProperty.provinceAddr)}
                <label>Tỉnh</label>
              </Grid>
            </Grid>
            <br />
            <input type="submit" value="Khóa lựa chọn" className="submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CheckBox;
