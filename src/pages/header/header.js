import React, { Component } from 'react';
import Nav from './nav/nav';
import Jumbotron from './jumbotron/jumbotron';

export default class Header extends Component {
  render() {
    return (
      <header>
       <Nav />
       <Jumbotron />
      </header>
    )
  }
}
