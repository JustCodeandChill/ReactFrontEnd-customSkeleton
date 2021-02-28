import React from "react";

const addressProperty = {
  houseNumber: "houseNumber"
};
class Result extends React.Component {
  // So nha chi nen chua so
  isEmpty = (property) => {
    return (
      property === null || property === "" || typeof property === "undefined"
    );
  };

	isAlphabetOnly = (str) => {
		let patt = /^[A-Z]+$/i
		return patt.test(str)
	}

  createString = (property) => {
    let result = "";

    switch (property) {
      case addressProperty.houseNumber:
				let stringToTest = this.props.addressInfo[property]

        if (!this.isEmpty(stringToTest)) {
					if (this.isAlphabetOnly(stringToTest)) {
						result += "Number " + stringToTest;
					} else {
						result += stringToTest + " number";
					}
        }
    }
    return result;
  };
  generate = () => {
    let str = "";
    str = this.createString("houseNumber");
    //if (!this.isEmpty(this.props.addressInfo.houseNumber)) {
    //    str += "Number " + this.props.addressInfo.houseNumber;
    //}

    //if (!this.isEmpty(this.props.addressInfo.houseNumber)) {
    //    str += "Number " + this.props.addressInfo.houseNumber;
    //}
    return str;
  };

  render() {
    console.log('In Result state', this.state);
    console.log('In Result props', this.props);
    //let emptyString = "";
    let generatedString = this.generate();
    return <div>{this.props.generate ? generatedString : generatedString}</div>;
  }
}

export default Result;
