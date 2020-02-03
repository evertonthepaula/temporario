import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  FaSchool,
  FaRegPaperPlane,
  FaPlusCircle,
  FaArchive,
  FaSignOutAlt,
} from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { FiHome, FiCalendar, FiUser, FiBook } from 'react-icons/fi';

import { Container, Row, Col } from 'react-bootstrap';
import logo from '~/assets/positivo-on.png';
import { signOut } from '~/store/modules/auth/actions';

import { NavItem, Head, Title } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    console.log('foi');

    dispatch(signOut());
  }

  return (
    <Head>
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="" />
          </Col>
          <Col>
            <nav>
              <NavItem to="/home">
                <FiHome className="icon" /> Home
              </NavItem>
              <NavItem to="/escola">
                <FaSchool className="icon" /> Escola
              </NavItem>
              <NavItem to="/calendario">
                <FiCalendar className="icon" /> Calendário
              </NavItem>
              <NavItem to="/biblioteca">
                <FiBook className="icon" /> Biblioteca
              </NavItem>
              <NavItem to="/perfil">
                <FiUser className="icon" /> Perfil
              </NavItem>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title>Seja bem-vindo, Gulano!</Title>
          </Col>
          <Col>
            <nav>
              <NavItem to="/mensagens">
                <FaRegPaperPlane className="icon" />
                Mensagens
              </NavItem>
              <NavItem to="/notificações">
                <MdNotificationsNone className="icon" />
                Notificações
              </NavItem>
              <span onClick={handleSignOut}>
                <FaSignOutAlt className="icon" />
                Sair do Sistema
              </span>
            </nav>
          </Col>
        </Row>
      </Container>
    </Head>
  );
}
