import React from 'react';

class Result extends React.Component {
    render() {
        console.log(this.props.generate);
        return (
            <div>
                {this.props.generate ? "This is result Component;" : "I am me"}
                
            </div>
        )
    }
}

export default Result;