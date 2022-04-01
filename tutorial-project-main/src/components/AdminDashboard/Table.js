import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import data from "./userdata.json";

const App = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <Container>
      <div>
        <Table striped hover size="lg">
          <thead className="t-head">
            <tr>
              <th>Userid</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.UserId}</td>
                <td>{contact.Name}</td>
                <td>{contact.Email}</td>
                <td>{contact.Created}</td>
                <td>{contact.Modified}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default App;
