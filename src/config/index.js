const URL_BACKEND = window.location.href.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://guiflix-hiroshisogabe.herokuapp.com';

export default {
  URL_BACKEND,
};
