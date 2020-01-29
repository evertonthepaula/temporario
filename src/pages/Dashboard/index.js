import React, { useState, useEffect } from 'react';

import PeopleService from '../../services/api/peopleService';

import { Container, Row, Col } from 'react-bootstrap';

import Person from '../../components/Person';
import People from '../../features/People';
import Button from '../../styles/components/button';
import Video from '../../components/Video/player';

export default function Dashboard() {
  const [person, setPerson] = useState();

  useEffect(() => findPerson(setPerson), []);

  return (
    <>
      <Container>
        <h1>Template para projetos React</h1>

        <Row>
          <Col>
            <h3>Apis disponíveis:</h3>
            <ul>
              <li>{process.env.REACT_APP_API}</li>
              <li>{process.env.REACT_APP_AUTH_API}</li>
              <li>{process.env.REACT_APP_FAKE_API}</li>
            </ul>

            <p>ambiente: <b>{process.env.NODE_ENV}</b></p>
          </Col>
        </Row>

        <h2>Exemplos de componentes</h2>

        <h3>Componente do tipo: <b>Styled Component</b></h3>
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

        <h3>Componente do tipo: <b>Stateless Component</b></h3>
        <Person person={person} />

        <h3>Componente do tipo: <b>Stateful Component</b></h3>
        <Video src={`${process.env.PUBLIC_URL}videos/introducao-react.webm`} />

        <h3>Componente do tipo: <b>Feature Component</b></h3>
        <People />
      </Container>
    </>
  );
}

function findPerson(setStatePerson) {
  PeopleService.find(4)
    .then(response => setStatePerson(response.data))
    .catch(error => error)
    .finally(() => { });
}
