import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',

    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const dadosJson = await respostaServidor.json();
        return dadosJson;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
};
