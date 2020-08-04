import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PaginaDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map((categoria) => categoria.titulo);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=hhQ3RtvmfEg',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <>
      <PaginaDefault>
        <h1>Cadastro do vídeo</h1>
        <form onSubmit={(evento) => {
          evento.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />
          <Button>
            Cadastrar
          </Button>
        </form>
        <Link to="/cadastro/categoria/">
          Cadastrar Categoria
        </Link>
      </PaginaDefault>
    </>
  );
}

export default CadastroVideo;
