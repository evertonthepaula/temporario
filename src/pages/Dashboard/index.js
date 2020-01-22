import React, { useState, useEffect } from 'react';

import PeopleService from '../../services/api/peopleService';

import Person from '../../components/Person';
import People from '../../features/People';

import './style.css';

export default function Dashboard() {
  const [person, setPerson] = useState();

  useEffect(() => findPerson(setPerson), []);

  return (
    <div>
      <h1>template para projetos React Ecmascript</h1>

      <p>
        Consumindo API:
        <b>{process.env.REACT_APP_API}</b>
        {' '}
        no ambiente do tipo:
        <b>{process.env.NODE_ENV}</b>
      </p>

      <p>
        Para contribuir com o
        <a href={process.env.REACT_APP_TEMPALTE_LINK}>Template</a>
        , acesse a
        <a href={process.env.REACT_APP_TEMPALTE_DOCS}>Documentação</a>
      </p>

      <h3>Exemplo de componentes</h3>

      <p>
        Componente do tipo:
        <b>Stateless Component</b>
      </p>
      <Person person={person} />

      <p>
        Componente do tipo:
        <b>Feature Component</b>
      </p>
      <People />
    </div>
  );
}

function findPerson(setStatePerson) {
  PeopleService
    .find(1)
    .then((response) => setStatePerson(response.data))
    .catch((error) => error)
    .finally(() => { });
}
