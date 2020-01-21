import Api from './index';

function get() {
  return Api(`people/`);
}

function find(id) {
  return Api(`people/${id}/`);
}

export default {
  get,
  find,
};
