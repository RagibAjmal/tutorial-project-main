import React, { useState, useEffect, Fragment } from 'react';
import data from './userdata.json';
import ReadOnlyRow from './ReadOnlyRow';
import { Container, Table } from 'react-bootstrap';
function TableMain() {
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    UserId: '',
    Name: '',
    Email: '',
    Created: '',
    Modified: '',
  });

  const [editContactId, setEditContactId] = useState(null);


  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };



  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      UserId: editFormData.UserId,
      Name: editFormData.Name,
      Email: editFormData.Email,
      Created: editFormData.Created,
      Modified: editFormData.Modified,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      UserId: contact.UserId,
      Name: contact.Name,
      Email: contact.Email,
      Created: contact.Created,
      Modified: contact.Modified,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <Container>
      <form onSubmit={handleEditFormSubmit}>
        <Table striped bordered hover size="sm" responsive>
          <thead className="bg-primary text-light">
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <div/>
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>
    </Container>
  );
}

export default TableMain;
