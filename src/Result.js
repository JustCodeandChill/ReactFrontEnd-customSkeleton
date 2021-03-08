import React from 'react';
import './styles/Result.css';
import {
  removeVietnameseTones,
  isAlphabetOnly,
  isEmpty,
} from './config/functions';
import { addressProperty } from './config/globalName';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.result = React.createRef();
  }
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
      this.createAddress('wardAddr') +
      this.createAddress('districtAddr') +
      this.createAddress('cityAddr') +
      this.createAddress('provinceAddr');
    str = str.substring(0, str.length - 3);
    str += '.';
    return str;
  };

//  copyToClipBoard = (e) => {
//    if (this.result.current.innerText) return;
//    var copyText = '';
//    copyText = this.result;

//    /* Select the text field */
//    copyText.select();
//    copyText.setSelectionRange(0, 99999); /* For mobile devices */
//    console.log('clicked', copyText);
//    /* Copy the text inside the text field */
//    document.execCommand('copy');
//  };

  render() {
    let emptyString = '';
    let generatedString = this.generate();
    return (
      <div>
        {/*<button className="copy-btn" onClick={this.copyToClipBoard}>Copy</button>*/}
        <div className="result" ref={this.result}>
          {this.props.generate ? generatedString : emptyString}
        </div>
      </div>
    );
  }
}

export default Result;
