import React, { useState, useEffect } from 'react';

import PeopleService from '../../services/starWars/peopleService';

import Person from '../../components/Person'

import './style.css';

export default function Dashboard() {
  const [person, setPerson] = useState();

  useEffect(() => findPerson(setPerson), []);

  return (
    <div>
      <h1 className="title">Hello World Template!</h1>

      <p>
        API: {process.env.REACT_APP_API}
      </p>
      <br />
      <b>
        Environment: {process.env.NODE_ENV}
      </b>
      <br />
      <b>Author: </b>
      <a href={process.env.REACT_APP_AUTHOR_LINK} rel="author">
        {process.env.REACT_APP_AUTHOR}
      </a>

      <hr />

      <Person person={person | null} xablau="teste"/>
      <hr />
    </div>
  );
}

function findPerson(setPerson) {
  PeopleService
    .find(1)
    .then(response => {
      // handle success
      console.log(response);
      return setPerson(response);
    })
    .catch(error => console.log(error))
    .finally(() => { });
}
