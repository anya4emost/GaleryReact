import React from 'react';
import '../gallery/gallery.scss';

export class PhotoIconsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            translateX: 0
        };
    }

    shiftPreview(param) {
        let ulWidth = document.getElementsByClassName("icons")[0].clientWidth;
        let iconsWidth = this.props.images.length * 77;

        if (param && (iconsWidth - ulWidth + this.state.translateX) / ulWidth < 1) {
            this.setState({
                translateX: -iconsWidth + ulWidth
            })
        } else if (param && (iconsWidth - ulWidth + this.state.translateX) / ulWidth > 1) {
            this.setState({
                translateX: this.state.translateX - Math.floor(ulWidth / 77) * 77
            })
        }else if (!param && -this.state.translateX < ulWidth) {
            this.setState({translateX: 0})
        }  else {
            this.setState({
                translateX: this.state.translateX + Math.floor(ulWidth / 77) * 77
            })
        }
    }

    render() {

        return (
            <div className="miniPhoto-container">
                <img className="arrow" src="../src/images/arrow-left.png" onClick={() => {
                    this.shiftPreview(true)
                }}/>
                <ul className="icons">
                    <div className="toShift" style={{
                        transform: `translateX(${this.state.translateX}px)`,
                        transition: 'transform 1s'
                    }}>
                        {this.props.photoIcons}
                    </div>
                </ul>
                <img className="arrow" src="../src/images/arrow-right.png" onClick={() => {
                    this.shiftPreview(false)
                }}/>
            </div>
        )
    }
}
