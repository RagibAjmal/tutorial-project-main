import React, { useState, useEffect, Fragment } from 'react';
import data from './examdata.json';
import ReadOnlyRow from './ReadOnlyRow2';
import { Container, Table } from 'react-bootstrap';
function TableMain() {
  const [contacts, setContacts] = useState(data);

  const [editFormData, setEditFormData] = useState({
    ExamId: '',
    Title: '',
    Attempts: '',
    Score: '',
    LastAttempt: '',
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
      ExamId: editFormData.ExamId,
      Title: editFormData.Title,
      Attempts: editFormData.Attempts,
      Score: editFormData.Score,
      LastAttempt: editFormData.LastAttempt,
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
      ExamId: contact.ExamId,
      Title: contact.Title,
      Attempts: contact.Attempts,
      Score: contact.Score,
      LastAttempt: contact.LastAttempt,
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
              <th>Exam Id</th>
              <th>Title</th>
              <th>Attempts</th>
              <th>Score</th>
              <th>LastAttempt</th>
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
