'use strict';

import React, { Component } from 'react';


class PhotoCard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { 
	  };
	}

  render() {
    return (
      <article class="wallpaper">
            {this.props.children}
          </article>
    );
  }
}

export default PhotoCard;