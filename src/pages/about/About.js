import React, { Component } from 'react';
import Education from './education/education';
import Intro from './intro/intro';
import Hobbies from './hobbies/hobbies';

export default class About extends Component {
  render() {
    return (
      <>
        <Intro />
        <Education />
        <Hobbies />
      </>
    );
  }
}
