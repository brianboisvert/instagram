import React, { Component } from 'react';
import Post from './post';

class Feed extends Component {

   render() {
      return (
        <div className='feed'>
           <div>
            <Post images={this.props.images}/>
           </div>
        </div>
      )
   }
}

export default Feed;
