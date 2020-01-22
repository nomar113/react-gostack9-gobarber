import React, { useState, useEffect } from 'react';
import { Container, Book } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      setBooks(response.data);
    }
    loadBooks();
  }, [books]);

  return (
    <Container>
      <ul>
        {books.map(book => (
          <Book key={book._id}>
            <strong>{book.title}</strong>
            <span>{book.author}</span>
            <span>{book.category}</span>
          </Book>
        ))}
      </ul>
    </Container>
  );
}
