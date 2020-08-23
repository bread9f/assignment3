'use strict';

import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
      <div class="container">
        <a href="#">Hulk</a>
        <a href="#" class="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>
    );
  }
}


export default Navbar;