import React from './node_modules/~/pages/AddAviso/node_modules/react';

import {
  FaSchool,
  FaRegPaperPlane,
  FaPlusCircle,
  FaArchive,
} from './node_modules/~/pages/AddAviso/node_modules/react-icons/fa';
import { MdNotificationsNone } from './node_modules/~/pages/AddAviso/node_modules/react-icons/md';
import {
  FiHome,
  FiCalendar,
  FiUser,
  FiBook,
} from './node_modules/~/pages/AddAviso/node_modules/react-icons/fi';

import {
  Container,
  Row,
  Col,
} from './node_modules/~/pages/AddAviso/node_modules/react-bootstrap';

import Card from '../../components/Card';

import { NavItem, BtnAdd, LinkArchive, Header, Title } from './styles';

export default function AddAviso() {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Col>logo</Col>
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
              </nav>
            </Col>
          </Row>
        </Header>

        <Row>
          <BtnAdd>
            Adicionar novo aviso
            <FaPlusCircle className="icon" />
          </BtnAdd>
        </Row>

        <Row>
          <Col>
            <Card
              cover={`${process.env.PUBLIC_URL}card-cover.png`}
              tag="Festa"
              title="Almoço temático 18/03"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi mi, fringilla eget quam in, interdum facilisis felis. Sed vel ipsum non quam elementum consectetur. Ut scelerisque ultrices lacus, in feugiat ante fermentum non. Etiam nec metus lacus. Maecenas consequat ex sit amet augue lobortis lacinia."
              owner="Gestor Fulano de Tal"
            />
          </Col>
          <Col>
            <Card
              tag="Aviso"
              title="Mudança no passeio ao Museu Egípcio"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi mi, fringilla eget quam in, interdum facilisis felis. Sed vel ipsum non quam elementum consectetur. Ut scelerisque ultrices lacus, in feugiat ante fermentum non. Etiam nec metus lacus. Maecenas consequat ex sit amet augue lobortis lacinia."
              owner="Gestor Fulano de Tal"
            />
          </Col>
          <Col>
            <Card
              tag="Aviso"
              title="Mudança no passeio ao Museu Egípcio"
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisi mi, fringilla eget quam in, interdum facilisis felis. Sed vel ipsum non quam elementum consectetur. Ut scelerisque ultrices lacus, in feugiat ante fermentum non. Etiam nec metus lacus. Maecenas consequat ex sit amet augue lobortis lacinia."
              owner="Gestor Fulano de Tal"
            />
          </Col>
        </Row>

        <LinkArchive>
          <FaArchive className="icon" />
          Itens arquivados
        </LinkArchive>
      </Container>
    </>
  );
}
