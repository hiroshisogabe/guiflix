import React from 'react';
import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';

function App() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
    </div>
  );
}

export default App;
