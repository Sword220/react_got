import React, { Component } from 'react';
import axios from 'axios'
import { Header } from 'semantic-ui-react';

class Home extends Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('api.got.show/api/characters')
    .then( ({ data }) => {
      this.setState({ characters: data })
  })
}

  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
    );
  }
}

export default Home;
