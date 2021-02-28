import React from 'react';
import {
  removeVietnameseTones,
  isAlphabetOnly,
  isEmpty,
} from './config/functions';
import { addressProperty } from './config/globalName';

class Result extends React.Component {
  createPartOfTheAddress = (stringToTest, appendAddress) => {
    let result = '';
    if (!isEmpty(stringToTest)) {
      if (isAlphabetOnly(stringToTest)) {
        result += stringToTest + ' ' + appendAddress + ' , ';
      } else {
        result += appendAddress + ' ' + stringToTest + ' , ';
      }
    } else {
      result += '';
    }
    return result;
  };

  createAddress = (property) => {
    let result = '';
    let stringToTest = '';
    switch (property) {
      case addressProperty.houseNumber:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Number');
        break;
      case addressProperty.alleyLaneAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Alley');
        break;
      case addressProperty.laneAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Lane');
        break;
      case addressProperty.streetAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Street');
        break;
      case addressProperty.hamletAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Hamlet');
        break;
      case addressProperty.communeAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Commune');
        break;
      case addressProperty.wardAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Ward');
        break;
      case addressProperty.districtAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'District');
        break;
      case addressProperty.cityAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'City');
        break;
      case addressProperty.provinceAddr:
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Province');
        break;
    }
    return result;
  };
  generate = () => {
    let str = '';
    str =
      this.createAddress('houseNumber') +
      this.createAddress('alleyLaneAddr') +
      this.createAddress('laneAddr') +
      this.createAddress('streetAddr') +
      this.createAddress('hamletAddr') +
      this.createAddress('communeAddr') +
      this.createAddress('districtAddr') +
      this.createAddress('cityAddr') +
      this.createAddress('provinceAddr');
    str = str.substring(0, str.length - 3);
    str += '.';
    return str;
  };

  render() {
    let emptyString = "";
    let generatedString = this.generate();
    return <div>{this.props.generate ? generatedString : emptyString}</div>;
  }
}

export default Result;
