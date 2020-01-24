import Api from './index';

function get({ page, qtd }) {
  return Api(`users?page=${page}&per_page=${qtd}`);
}

function find(id) {
  return Api(`users/${id}`);
}

export default {
  get,
  find
};
