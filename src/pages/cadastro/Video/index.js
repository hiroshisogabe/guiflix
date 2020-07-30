import React from 'react';
import PaginaDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <>
            <PaginaDefault>
                <h1>Cadastro do vídeo</h1>
                <Link to="/cadastro/categoria/">
                    Cadastrar Categoria
                </Link>
            </PaginaDefault>
        </>
    );
}

export default CadastroVideo;
