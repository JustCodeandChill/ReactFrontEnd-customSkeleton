import React from 'react';
import './styles/App.css';
//import Checkbox from './CheckBox';
import Form from './Form';
import { Container } from '@material-ui/core';

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <Form />
        {/*<Result />*/}
      </Container>
    );
  }
}

export default App;
