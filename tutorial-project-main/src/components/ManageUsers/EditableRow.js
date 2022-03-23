import React from 'react';
import { Button } from 'react-bootstrap';

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a mobile..."
          name="mobile"
          value={editFormData.mobile}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter date..."
          name="created"
          value={editFormData.created}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button
          className="table-button"
          variant="primary"
          size="sm"
          type="submit"
        >
          Save
        </Button>
        <Button
          className="table-button"
          variant="danger"
          size="sm"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
