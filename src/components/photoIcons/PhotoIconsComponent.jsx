import React from 'react';
import '../gallery/gallery.scss';

export class PhotoIconsComponent extends React.Component {

constructor(props){
  super(props);
  this.state = {translateX: 0};
}

  shiftPreview(param){
     this.setState({translateX: document.getElementsByClassName("icons")[0].clientWidth})

  }

  render(){

    return (
      <div className="miniPhoto-container">
          <img className="arrow" src="../src/images/arrow-left.png"
           onClick={() => {this.shiftPreview(true)}}/>
          <ul className="icons">
          <div className="toShift" style={{transform: `translateX(-${this.state.translateX}px)`}}>
              {this.props.photoIcons}
              </div>
          </ul>
          <img className="arrow"  src="../src/images/arrow-right.png"/>
      </div>
    )
  }
}
