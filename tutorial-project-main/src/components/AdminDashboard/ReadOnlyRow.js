import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const ReadOnlyRow = ({ contact}) => {
  return (
    <tr>
      <td>{contact.UserId }</td>
      <td>{contact.Name}</td>
      <td>{contact.Email}</td>
      <td>{contact.Created}</td>
      <td>{contact.Modified}</td>
      
    </tr>
  );
};

export default ReadOnlyRow;
