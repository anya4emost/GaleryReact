import React from 'react';
import {Gallery} from '../gallery/GalleryComponent';
import {ColorPage} from '../colorPage/ColorPageComponent';

export class Page extends React.Component {
    photos = ["src/images/1.jpg",
        "src/images/2.jpg",
        "src/images/3.jpg",
        "src/images/4.jpg",
        "src/images/5.jpg",
        "src/images/6.jpg",
        "src/images/7.jpg",
        "src/images/8.jpg",
        "src/images/9.jpg"];
    slideSpeed = 3;
    canOpenPopup = false;

    constructor(props) {
        super(props);
        this.state={currentIndex: 0};
        console.log(this.state.currentIndex);
    }

    switchPict = (arrowLeft) => {
        arrowLeft ? this.setState({currentIndex: --this.state.currentIndex}) : this.setState({currentIndex: ++this.state.currentIndex});
        console.log(this.state.currentIndex);
    };

    render() {
        return (
            <div>
                <Gallery
                    images={this.photos}
                    currentIndex={this.state.currentIndex}
                    slideSpeed={this.slideSpeed}
                    canOpenPopup={this.canOpenPopup}
                    switchPict={this.switchPict}
                />
                <ColorPage color={"red"}/>
            </div>
        );
    }
}
