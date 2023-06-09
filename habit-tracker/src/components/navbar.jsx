import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('header');
    return (
      <header className="navbar">
        <i className="navbar-logo fa-solid fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
