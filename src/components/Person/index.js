import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FaReact } from 'react-icons/fa';
import { Card, CardInfo, CardImage, Info } from './styles';

function Person({ person: { id, email, first_name, last_name, avatar } }) {
  return (
    <>
      <Card>
        <CardImage>
          <img src={avatar} alt={first_name} />
        </CardImage>

        <CardInfo>
          <FaReact />
          <Info>{id}</Info>
          <Info>{email}</Info>
          <Info>{first_name}</Info>
          <Info>{last_name}</Info>
        </CardInfo>
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
    avatar: PropTypes.string
  })
};

Person.defaultProps = {
  person: {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  }
};

export default memo(Person);
