import React from 'react';
import '../gallery/gallery.scss';

export class PhotoIconsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="miniPhoto-container">
                <img className="arrow" src="../src/images/arrow-left.png" onClick={() => {
                    this.props.shiftPreview(true)
                }}/>
                <ul className="icons">
                    <div className="toShift" style={{
                        transform: `translateX(${this.props.translateX}px)`,
                        transition: 'transform 1s'
                    }}>
                        {this.props.photoIcons}
                    </div>
                </ul>
                <img className="arrow" src="../src/images/arrow-right.png" onClick={() => {
                    this.props.shiftPreview(false)
                }}/>
            </div>
        )
    }
}
