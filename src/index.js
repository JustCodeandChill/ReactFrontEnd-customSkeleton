import React from 'react';
import ReactDOM from 'react-dom';
import './styles/welcome.css';

class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World from React boilerplate</h1>
                <p>I feel out of line</p>
            </div>
        );
    }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
