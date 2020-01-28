import React, { useState, useEffect } from 'react';

import PeopleService from '../../services/api/peopleService';

import Person from '../../components/Person';
import People from '../../features/People';
import Button from '../../styles/components/button';
import Video from '../../components/Video/player';

export default function Dashboard() {
  const [person, setPerson] = useState();

  useEffect(() => findPerson(setPerson), []);

  return (
    <>
      <h1>Template para projetos React</h1>

      <h4>Apis disponíveis:</h4>
      <ul>
        <li>{process.env.REACT_APP_API}</li>
        <li>{process.env.REACT_APP_AUTH_API}</li>
        <li>{process.env.REACT_APP_FAKE_API}</li>
      </ul>

      <p>
        Consumindo API:
        <b>{process.env.REACT_APP_API}</b> no ambiente do tipo:
        <b>{process.env.NODE_ENV}</b>
      </p>

      <h3>Exemplos de componentes</h3>

      <p>
        Componente do tipo:
        <b>Stateless Component</b>
      </p>
      <Person person={person} />

      <p>
        Componente do tipo:
        <b>Stateful Component</b>
      </p>
      <Video src={`${process.env.PUBLIC_URL}videos/introducao-react.webm`} />

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
      <Button disabled>disabled</Button>

      <Button className="green">green</Button>
      <Button className="orange">orange</Button>
      <Button className="red">red</Button>
      <Button className="blue">blue</Button>

      <Button color="green">green</Button>
      <Button color="orange">orange</Button>
      <Button color="red">red</Button>
      <Button color="blue">blue</Button>
    </>
  );
}

function findPerson(setStatePerson) {
  PeopleService.find(4)
    .then(response => setStatePerson(response.data))
    .catch(error => error)
    .finally(() => {});
}
