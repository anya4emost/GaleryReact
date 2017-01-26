import React from 'react';
import './gallery.scss';

export class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let photoIcons = this.props.images.map(function(photo){
          return  (<li style={{backgroundImage: `url(${photo})`}}></li>);
        });

        return (
            <div>
                <div className="bigPhoto-container">
                    <img className="arrow" src="../src/images/arrow-left.png"/>
                    <div className="bigPhoto">
                        <img src={this.props.images[this.props.currentIndex]}/>
                    </div>
                    <img className="arrow" src="../src/images/arrow-right.png"/>
                </div>
                <div className="miniPhoto-container">
                    <img className="arrow" src="../src/images/arrow-left.png"/>
                    <ul>
                        {photoIcons}
                    </ul>
                    <img className="arrow" src="../src/images/arrow-right.png"/>
                </div>
            </div>
        );
    }
}
