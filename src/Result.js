import React from 'react';

class Result extends React.Component {
    // So nha chi nen chua so
    isEmpty = (property) => {
        return (property === null || property === "" || typeof property === "undefined");
    }
    generate = () => {
        let str = "";
        if (!this.isEmpty(this.props.addressInfo.houseNumber)) {
            str += "Number " + this.props.addressInfo.houseNumber;
        }
        return str;
    }

    render() {
        console.log('state', this.state);
        console.log('props', this.props);
        //let emptyString = "";
        let generatedString = this.generate()
        return (
            <div>
                {this.props.generate ? generatedString : generatedString}
                
            </div>
        )
    }
}

export default Result;