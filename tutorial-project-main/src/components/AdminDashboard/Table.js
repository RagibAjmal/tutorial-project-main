import React, { useState } from 'react';

import data from './userdata.json';
import { Container, Table,Col, Row, Button  } from 'react-bootstrap';
const App = () => {
  const contacts = useState(data);
  return (
    <Container>
      <div>
      <Row style={{ marginTop: "40px" }}>

<Col sm={4}>

  <h5>Recent Users</h5>

</Col>

<Col md={{ span: 2, offset: 6 }} sm={{ span: 3, offset: 5 }}>

  <Button

    onClick={'./userdata.json'}

    style={{ width: "100%" }}

    variant="outline-success"

  >

    {/* {condition ? "View All" : "collapse"} */}

  </Button>

</Col>

</Row>
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
