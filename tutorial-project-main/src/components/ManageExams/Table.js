import React, { useState, Fragment } from 'react';
import data from './data.json';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

import { Container, Table } from 'react-bootstrap';
function TableMain() {
  const [contacts, setContacts] = useState(data);
  /* const [addFormData, setAddFormData] = useState({
          fullName: "",
          address: "",
          phoneNumber: "",
          email: "",
        });*/

  const [editFormData, setEditFormData] = useState({
    ExamId: '',
    ExamTitle: '',
    StartDate: '',
    EndDate: '',
  });

  const [editContactId, setEditContactId] = useState(null);

  /*const handleAddFormChange = (event) => {
          event.preventDefault();
      
          const fieldName = event.target.getAttribute("name");
          const fieldValue = event.target.value;
      
          const newFormData = { ...addFormData };
          newFormData[fieldName] = fieldValue;
      
          setAddFormData(newFormData);
        };*/

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  /*const handleAddFormSubmit = (event) => {
          event.preventDefault();
      
          const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
          };
      
          const newContacts = [...contacts, newContact];
          setContacts(newContacts);
        };*/

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      ExamId: editFormData.ExamId,
      ExamTitle: editFormData.ExamTitle,
      StartDate: editFormData.StartDate,
      EndDate: editFormData.EndDate,
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
      ExamTitle: contact.ExamTitle,
      StartDate: contact.StartDate,
      EndDate: contact.EndDate,
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
              <th>Exam Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th className="action-col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
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
