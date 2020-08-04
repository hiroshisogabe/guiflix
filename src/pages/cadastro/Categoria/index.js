import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PaginaDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://guiflix-hiroshisogabe.herokuapp.com/categorias';
    fetch(URL)
      .then(async (readableStream) => {
        const dadosJson = await readableStream.json();
        setCategorias([
          ...dadosJson,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Novo Polo',
    //       descricao: 'Todas as dúvidas do Novo Polo respondidas de maneira rápida e objetiva',
    //       cor: '#041b40',
    //     },
    //   ]);
    // }, 1 * 1000);
  }, []);

  return (
    <>
      <PaginaDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>
        <form onSubmit={function handleSubmit(evento) {
          evento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          clearForm();
        }}
        >
          <FormField
            label="Título da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.titulo}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>
        <Link to="/">
          Ir para home
        </Link>
      </PaginaDefault>
    </>
  );
}

export default CadastroCategoria;
