import React from 'react';
import ReactImageGallery from 'react-image-gallery';

import image1 from '../images/mr-tony-tony.jpeg';
import image2 from '../images/stuffed-horse-haircut-4-3.jpeg';

const images = [
    {
      original: image1,
    //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: image2,
    //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    // {
    //   original: 'https://picsum.photos/id/1019/1000/600/',
    // //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    // },
  ];
  
  export default class MyGallery extends React.Component {
    render() {
      return <ReactImageGallery items={images} showBullets={true} showPlayButton={false} autoPlay={true} showNav={false} />;
    }
  }