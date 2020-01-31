import React from 'react';
import PropTypes from 'prop-types';

import { FaSchool } from 'react-icons/fa';
import { FiHome, FiCalendar, FiUser, FiBook } from 'react-icons/fi';
import { LinkItem, Icon } from './styles';

function MainMenu({ itens }, ...props) {
  return (
    <>
      {itens.map(({ path, name, icon }) => (
        <LinkItem key={name} to={path} activeClassName="selected">
          <Icon>{icon}</Icon>
          {name}
        </LinkItem>
      ))}
    </>
  );
}

MainMenu.propTypes = {
  itens: PropTypes.array
};

MainMenu.defaultProps = {
  itens: [
    {
      name: 'Home',
      path: 'home',
      icon: <FiHome />
    },
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon: <FiHome />
    },
    {
      name: 'Landing',
      path: 'landing',
      icon: <FiHome />
    },
    {
      name: 'Escola',
      path: 'escola',
      icon: <FaSchool />
    },
    {
      name: 'Calendario',
      path: 'calendario',
      icon: <FiCalendar />
    },
    {
      name: 'Biblioteca',
      path: 'biblioteca',
      icon: <FiBook />
    },
    {
      name: 'Perfil',
      path: 'perfil',
      icon: <FiUser />
    }
  ]
};

export default MainMenu;
