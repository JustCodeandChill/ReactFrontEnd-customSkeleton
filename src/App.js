import React from 'react';
import './styles/welcome.css';
//import Checkbox from './CheckBox';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from React boilerplate</h1>
        <p>I feel out of line</p>
        <Form />
      </div>
    );
  }
}

export default App;