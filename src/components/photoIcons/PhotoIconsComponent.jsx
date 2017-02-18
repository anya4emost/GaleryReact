import React from 'react';
import '../gallery/gallery.scss';

export class PhotoIconsComponent extends React.Component {
  render(){
    return (
      <div className="miniPhoto-container">
          <img className="arrow" src="../src/images/arrow-left.png"/>
          <ul>
              {this.props.photoIcons}
          </ul>
          <img className="arrow"  src="../src/images/arrow-right.png"/>
      </div>
    )
  }
}
