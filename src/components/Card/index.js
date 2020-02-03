import React, { useState } from 'react';

import { FaUser } from 'react-icons/fa';
import { GiPin } from 'react-icons/gi';

import { Button } from 'react-bootstrap';
import {
  Container,
  Header,
  CardCollapse,
  Cover,
  Tag,
  Title,
  Info,
  Owner,
  Btn,
  ActionsBtn,
} from './styles';

function Card({ cover, tag, title, info, owner }) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      {cover ? <Cover src={cover} alt="" /> : ''}

      <ActionsBtn>Editar</ActionsBtn>
      <ActionsBtn>Arquivar</ActionsBtn>
      <GiPin />

      <Header>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
      </Header>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>

      <CardCollapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </CardCollapse>

      <CardCollapse in={open}>
        <div id="example-collapse-text">
          <Info>{info}</Info>
          <Owner>
            <FaUser className="icon" />
            {owner}
          </Owner>
        </div>
      </CardCollapse>

      <Btn>Acessar</Btn>
    </Container>
  );
}

export default Card;
