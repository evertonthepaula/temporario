import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Service from './service';

import Person from '../../components/Person';

import './style.css';

function People({ title }) {
  const [people, setPeople] = useState([]);

  useEffect(() => Service.getPeople(setPeople), []);

  return (
    <>
      <h4>{title}</h4>

      {people.map((item, key) => <Person key={`person${key}`} person={item} />)}
    </>
  );
}

People.propTypes = {
  title: PropTypes.string,
};

People.defaultProps = {
  title: 'lista de pessoas',
};

export default People;
