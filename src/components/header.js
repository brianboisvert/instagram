import React, { Component } from 'react';

class Header extends Component {
   constructor(props) {
      super(props);

      this.state = {
         images: []
      };
   }

   render() {
      return (
         <div className='header'>
          Instagram
         </div>
      )
   }
}

export default Header;
