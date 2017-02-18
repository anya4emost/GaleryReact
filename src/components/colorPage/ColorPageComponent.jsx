import React from 'react';

export class ColorPage extends React.Component {

    constructor(props) {
        super(props);
    }

     fillPage(color){
        let b = document.getElementsByTagName("body");
        b.style.backgroundColor = color;
}

    render() {
        return (
            <div>
                <input type="button" value="Fill page" onClick={this.fillPage.bind(undefined, this.props.color)}/>
            </div>
        );
    }
}