import React from 'react';
import { Container, Book } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <ul>
        <Book>
          <strong>Dom Casmurro</strong>
          <span>Machado de Assis</span>
          <span>Romance</span>
        </Book>
        <Book>
          <strong>O Auto da Compadecida</strong>
          <span>Ariano Suassuna</span>
          <span>Comédia</span>
        </Book>
        <Book>
          <strong>Clean Code</strong>
          <span>Eric Evans</span>
          <span>Tecnologia</span>
        </Book>
        <Book>
          <strong>O Pequeno Príncipe</strong>
          <span />
          <span>Infantil</span>
        </Book>
      </ul>
    </Container>
  );
}
