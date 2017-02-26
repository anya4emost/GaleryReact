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
        console.log(this.state.translateX);
    }

    switchPict = (arrowLeft) => {
        if (arrowLeft && this.state.currentIndex > 0) {
            this.setState({
                currentIndex: --this.state.currentIndex
            })
        } else if (arrowLeft && this.state.currentIndex == 0) {}
        else if (!arrowLeft && this.state.currentIndex < this.photos.length - 1) {
            this.setState({
                currentIndex: ++this.state.currentIndex
            })
        } else {};
        console.log(this.state.currentIndex);
    };

    selectPict = (key) => {
        this.setState({currentIndex: key})
    };

    shiftPreview = (param) => {
        let ulWidth = document.getElementsByClassName("icons")[0].clientWidth;
        let iconsWidth = this.photos.length * 77;

        if (!param && (iconsWidth - ulWidth + this.state.translateX) / ulWidth < 1) {
            this.setState({
                translateX: -iconsWidth + ulWidth
            })
        } else if (!param && (iconsWidth - ulWidth + this.state.translateX) / ulWidth > 1) {
            this.setState({
                translateX: this.state.translateX - Math.floor(ulWidth / 77) * 77
            })
        } else if (param && -this.state.translateX < ulWidth) {
            this.setState({translateX: 0})
        } else {
            this.setState({
                translateX: this.state.translateX + Math.floor(ulWidth / 77) * 77
            })
        }
        console.log(this.state.translateX)
    };

    render() {
        return (
            <div>
                <Gallery images={this.photos} currentIndex={this.state.currentIndex} slideSpeed={this.slideSpeed} canOpenPopup={this.canOpenPopup} switchPict={this.switchPict} selectPict={this.selectPict} shiftPreview={this.shiftPreview} translateX={this.state.translateX}/>
            </div>
        );
    }
}
