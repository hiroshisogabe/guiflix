import React from 'react';
import styled from 'styled-components';
import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';

const AppWraper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWraper>
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
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </AppWraper>
  );
}

export default Home;
