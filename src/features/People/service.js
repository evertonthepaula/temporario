import PeopleService from '../../services/api/peopleService';

function getPeople(setState) {
  PeopleService.get({ page: 1, qtd: 3 })
    .then(response => setState(response.data))
    .catch(() => setState([]))
    .finally(() => {});
}

export default {
  getPeople
};
