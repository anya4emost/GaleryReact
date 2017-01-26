import React from 'react';
import './gallery.scss';

export class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.images = ["src/images/1.jpg", "src/images/2.jpg", "src/images/3.jpg", "src/images/4.jpg", "src/images/5.jpg", "src/images/6.jpg", "src/images/7.jpg", "src/images/8.jpg", "src/images/9.jpg"];
        this.slideSpeed = 3;
        this.canOpenPopup = true;
        this.currentImageIndex = 4;
    }

    render() {
        return (
            <div>
                <div className="bigPhoto-container">
                    <img className="arrow" src="../src/images/arrow-left.png"/>
                    <div className="bigPhoto">
                        <img src={this.images[this.currentImageIndex]}/>
                    </div>
                    <img className="arrow" src="../src/images/arrow-right.png"/>
                </div>
                <div className="miniPhoto-container">
                    <img className="arrow" src="../src/images/arrow-left.png"/>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <img className="arrow" src="../src/images/arrow-right.png"/>
                </div>
            </div>
        );
    }
}
