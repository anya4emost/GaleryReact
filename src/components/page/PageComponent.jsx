import React from 'react';
import {Gallery} from '../gallery/GalleryComponent';

export class Page extends React.Component {
    photos = [
        "src/images/1.jpg",
        "src/images/2.jpg",
        "src/images/3.jpg",
        "src/images/4.jpg",
        "src/images/5.jpg",
        "src/images/6.jpg",
        "src/images/7.jpg",
        "src/images/8.jpg",
        "src/images/9.jpg",
        "src/images/10.jpg",
        "src/images/11.jpg",
        "src/images/12.jpg",
        "src/images/13.jpg",
        "src/images/14.jpg",
        "src/images/15.jpg"
    ];
    slideSpeed = 3;
    canOpenPopup = false;

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            translateX: 0
        };
    }

    switchPict = (arrowLeft) => {
        let currentIndex = this.state.currentIndex;

        if (arrowLeft && this.state.currentIndex > 0) {
            currentIndex -= 1;
        } else if (!arrowLeft && this.state.currentIndex < this.photos.length - 1) {
            currentIndex += 1;
        }

        this.setState({currentIndex: currentIndex})
    };

    selectPict = (key) => {
        this.setState({currentIndex: key})
    };

    shiftPreview = (param) => {
        const thumbNailWidth = 77;
        let ulWidth = document.getElementsByClassName("icons")[0].clientWidth,
            iconsWidth = this.photos.length * thumbNailWidth,
            translateX = this.state.translateX,
            newTranslateX = translateX + Math.floor(ulWidth / thumbNailWidth) * thumbNailWidth;

        if (param == 'arrow_right') {
            newTranslateX = -this.state.currentIndex * thumbNailWidth;
        } else if (!param) {
            if ((iconsWidth - ulWidth + translateX) / ulWidth < 1) {
                newTranslateX = -iconsWidth + ulWidth;
            } else {
                newTranslateX = translateX - Math.floor(ulWidth / thumbNailWidth) * thumbNailWidth;
            }
        } else if (-translateX < ulWidth) {
            newTranslateX = 0;
        }
        this.setState({translateX: newTranslateX});
    };

    render() {
        return (
            <div>
                <Gallery images={this.photos} currentIndex={this.state.currentIndex} slideSpeed={this.slideSpeed} canOpenPopup={this.canOpenPopup} switchPict={this.switchPict} selectPict={this.selectPict} shiftPreview={this.shiftPreview} translateX={this.state.translateX}/>
            </div>
        );
    }
}
