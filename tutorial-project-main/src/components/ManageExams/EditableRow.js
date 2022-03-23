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
          placeholder="Enter an Exam Id..."
          name="Exam Id"
          value={editFormData.ExamId}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Exam Title..."
          name="Exam Title"
          value={editFormData.ExamTitle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter a Start Date..."
          name="Start Date"
          value={editFormData.StartDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter an End Date..."
          name="End Date"
          value={editFormData.EndDate}
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
