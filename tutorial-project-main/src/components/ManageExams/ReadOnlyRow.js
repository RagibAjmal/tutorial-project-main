import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.ExamId }</td>
      <td>{contact.ExamTitle}</td>
      <td>{contact.StartDate}</td>
      <td>{contact.EndDate}</td>
      <td>
        <Button
          className="table-button"
          variant="primary"
          size="sm"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          <PencilSquare className="table-icon" />
          Edit
        </Button>
        <Button
          className="table-button"
          variant="danger"
          size="sm"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          <Trash className="table-icon" />
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
