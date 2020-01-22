import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Person(
  {
    person: {
      id, email, firstName, lastName, avatar,
    },
  },
) {
  return (
    <>
      <div>
        {id}
        {email}
        {firstName}
        {lastName}
        {avatar}
      </div>
    </>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Person.defaultProps = {
  person: {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
  },
};

export default Person;
