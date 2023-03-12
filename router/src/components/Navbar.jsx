import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(props) {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link>
    </nav>
  );
}
