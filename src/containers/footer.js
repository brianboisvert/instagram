import React, { Component } from 'react';

class Footer extends Component {
   render() {
      return (
         <div>
            <button value='feed' onClick={(e) => this.props.handleClick(e)}>Feed</button>
            <button value='post' onClick={(e) => this.props.handleClick(e)}>Post</button>
         </div>
      )
   }
}

export default Footer;
