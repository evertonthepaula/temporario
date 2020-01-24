import React, { useState, useEffect } from 'react';

import PeopleService from '../../services/api/peopleService';

import Person from '../../components/Person';
import People from '../../features/People';
import Button from '../../styles/components/button';
import Login from '../../features/forms/login';


export default function Dashboard() {
  const [person, setPerson] = useState();

  useEffect(() => findPerson(setPerson), []);

  return (
    <>
      <h1>template para projetos React</h1>

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

      <p>
        Componente do tipo:
        <b>Styled Component</b>
      </p>
      <Button>default</Button>
      <Button className="green">teste</Button>
      <Button className="orange">orange</Button>
      <Button className="red">red</Button>
      <Button className="blue">blue</Button>
      <Button className="disabled">disabled</Button>

      <Button color="green">teste</Button>
      <Button color="orange">orange</Button>
      <Button color="red">red</Button>
      <Button color="blue">blue</Button>
      <Button color="disabled">disabled</Button>

      <p>
        Componente do tipo:
        <b>Feature Component</b>
      </p>
      <Login />
    </>
  );
}

function findPerson(setStatePerson) {
  PeopleService
    .find(1)
    .then((response) => setStatePerson(response.data))
    .catch((error) => error)
    .finally(() => { });
}
