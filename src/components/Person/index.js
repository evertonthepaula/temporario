import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FaReact } from 'react-icons/fa';
import { Card, Image } from 'react-bootstrap';
import { Info } from './styles';

function Person({ person: { id, email, first_name, last_name, avatar } }) {
  return (
    <>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>
          {' '}
          {first_name} {last_name}{' '}
        </Card.Header>

        <Card.Body>
          <Image src={avatar} roundedCircle />
          <Card.Title>
            <FaReact /> {first_name} {last_name}{' '}
          </Card.Title>
          <Card.Text>
            <Info>{id}</Info>
            <Info>{email}</Info>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Person.defaultProps = {
  person: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
};

export default memo(Person);
