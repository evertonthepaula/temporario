import React from 'react';

import { FaPlusCircle, FaArchive } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '../../components/Card';

import { BtnAdd, LinkArchive, Header, Title } from './styles';

export default function Home() {
  return (
    <>
      <Container>
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
