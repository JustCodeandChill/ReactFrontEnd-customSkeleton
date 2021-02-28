import React from 'react';

const addressProperty = {
  houseNumber: 'houseNumber',
  alleyLaneAddr: 'alleyLaneAddr',
  laneAddr: 'laneAddr',
  streetAddr: 'streetAddr',
  hamletAddr: 'hamletAddr',
  communeAddr: 'communeAddr',
  wardAddr: 'wardAddr',
  districtAddr: 'districtAddr',
  cityAddr: 'cityAddr',
  provinceAddr: 'provinceAddr',
};

let isEmpty = (property) => {
  return (
    property === null || property === '' || typeof property === 'undefined'
  );
};
class Result extends React.Component {
  isAlphabetOnly = (str) => {
    let patt = /^[A-Za-z ]+$/;
    return patt.test(str);
  };

  createPartOfTheAddress = (stringToTest, appendAddress) => {
    let result = '';
    if (!isEmpty(stringToTest)) {
      if (this.isAlphabetOnly(stringToTest)) {
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
        console.log('alley: ' + addressProperty.alleyLaneAddr);
        stringToTest = removeVietnameseTones(this.props.addressInfo[property]);
        result += this.createPartOfTheAddress(stringToTest, 'Alley');
        break;
      case addressProperty.laneAddr:
        console.log('lane: ' + addressProperty.laneAddr);
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
		str += ".";
    return str;
  };

  render() {
    console.log('In Result state', this.state);
    console.log('In Result props', this.props);
    let generatedString = this.generate();
    return <div>{this.props.generate ? generatedString : generatedString}</div>;
  }
}

export default Result;

function removeVietnameseTones(str) {
  if (isEmpty(str)) return;
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  return str;
}
