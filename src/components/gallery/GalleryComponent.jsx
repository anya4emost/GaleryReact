import React from 'react';
import './gallery.scss';
import {PhotoIconsComponent} from '../photoIcons/PhotoIconsComponent';

export class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let photoIcons = this.props.images.map((photo, index) => {
            return (
                <li style={{
                    backgroundImage: `url(${photo})`
                }} key={index} onClick={() => {this.props.selectPict(index)}}></li>
            );
        });

        return (
            <div>
                <div className="bigPhoto-container">
                    <img className="arrow" onClick={() => {
                        this.props.switchPict(true)
                    }} src="../src/images/arrow-left.png"/>
                    <div className="bigPhoto">
                        <img src={this.props.images[this.props.currentIndex]}/>
                    </div>
                    <img className="arrow" onClick={() => {
                        this.props.switchPict(false); this.props.shiftPreview('arrow_right')
                    }} src="../src/images/arrow-right.png"/>
                </div>
                <PhotoIconsComponent photoIcons={photoIcons} images={this.props.images}
                selectPict={this.props.selectPict} shiftPreview={this.props.shiftPreview} translateX={this.props.translateX}/>
            </div>
        );
    }
}
