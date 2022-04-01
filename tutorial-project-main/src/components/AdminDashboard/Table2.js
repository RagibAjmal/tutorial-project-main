import React, { useState } from 'react';

import data from './examdata.json';
import { Container, Table } from 'react-bootstrap';
const App = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <Container>
      <div>
        <Table striped hover size="lg">
          <thead className="t-head">
            <tr>
              <th>Examid</th>
              <th>Title</th>
              <th>Attempts</th>
              <th>Score</th>
              <th>LastAttempt</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.ExamId}</td>
                <td>{contact.Title}</td>
                <td>{contact.Attempts}</td>
                <td>{contact.Score}</td>
                <td>{contact.LastAttempt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default App;
