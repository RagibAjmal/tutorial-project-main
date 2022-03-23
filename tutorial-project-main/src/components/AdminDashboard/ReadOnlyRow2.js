import React from 'react';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const ReadOnlyRow = ({ contact}) => {
  return (
    <tr>
      <td>{contact.ExamId }</td>
      <td>{contact.Title}</td>
      <td>{contact.Attempts}</td>
      <td>{contact.Score}</td>
      <td>{contact.LastAttempt}</td>
      
    </tr>
  );
};

export default ReadOnlyRow;
