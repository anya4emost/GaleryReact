import React from 'react';
import ReactDOM from 'react-dom';
import {Gallery} from './components/gallery/GalleryComponent';

let massivchik = ["src/images/1.jpg", "src/images/2.jpg", "src/images/3.jpg", "src/images/4.jpg", "src/images/5.jpg", "src/images/6.jpg", "src/images/7.jpg", "src/images/8.jpg", "src/images/9.jpg"];
ReactDOM.render(
    <Gallery images={massivchik} currentIndex={4} slideSpeed={3} canOpenPopup={false}/>,
    document.getElementById("app")
);