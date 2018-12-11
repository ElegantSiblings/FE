import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SubCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({
      hover: !this.state.hover,
    });
  }

  render() {
    const hoverStyle = {};
    return (
      <>
        <div class="side-container">
          <Link to="/">무침</Link>
          <Link to="/">나물</Link>
          <Link to="/">볶음</Link>
          <Link to="/">조림</Link>
          <Link to="/">젓갈&middot;장&middot;소스</Link>
          <Link to="/">세트</Link>
        </div>
      </>
    );
  }
}
