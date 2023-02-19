import React, { useEffect, useState } from 'react';
import './App.scss';
import Image from './components/Image';
import { TokenERC721 } from './models/tokenERC721';
import { urlToken } from './urls';




function App() {

  const [urlImage, setUrlImage] = useState('');

  useEffect(() => {
    fetch(urlToken)
      .then(response => response.json() as Promise<TokenERC721>)
      .then(json => setUrlImage(json.uri1024))
  }, []);



  return (
    <div className="App">
      <div className="row">
        <Image source={urlImage} alt='Image TokenERC721' />
      </div>
    </div>
  );
}

export default App;
