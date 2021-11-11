import React, { Component } from 'react';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';



class App extends Component {
  state = {
    
  };
  
  render() {
   

    return (
      <div >
       <Button />
       <ImageGallery />
       <ImageGalleryItem />
       <Loader />
       <Modal />
       <Searchbar />
      </div>
    );
  }
}

export default App;
