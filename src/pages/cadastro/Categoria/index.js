import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PaginaDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(evento) {
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

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
          setValues(valoresIniciais);
        }}
        >
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
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
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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
