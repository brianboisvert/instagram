import React, { Component } from 'react';

class Post extends Component {

   render() {
      let images = this.props.images
      var imageList = images.map(function(image){
                        return <img src={image}></img>;
                      })
      return (
         <div>
            { imageList }
         </div>
      )
   }
}

export default Post;
