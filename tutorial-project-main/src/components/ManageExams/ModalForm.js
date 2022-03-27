import React, { useState, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Button,
  Modal,
  FormControl,
  ModalDialog,
  Stack,
} from 'react-bootstrap';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

function ModalForm() {
  const [modal, setModal] = useState(false);

  function showModalHandler() {
    setModal(true);
  }

  function closeModalHandler() {
    setModal(false);
  }

  const validate = Yup.object({
    Title: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    Description: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .required('Required'),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
    Duration: Yup.string().required('Required'),
    AttemptsAllowed: Yup.number()
      .max(2, 'Must be 2 or less')
      .required('Required'),
  });

  return (
<Container className="my-3">
<Row>
<Col>
<Button variant="outline-dark">Manage Exams</Button>
</Col>

<Col className="bg-light border ms-auto">
            <Button
              variant="primary"
              size="sm"
              onClick={showModalHandler}
              className="new-user-button"
            >
              Add New Exam
            </Button>{' '}
         
        

        <Modal show={modal}>
          <Formik
            initialValues={{
              Title: '',
              Description: '',
              StartDate: '',
              EndDate: '',
              Duration: '',
              AttemptsAllowed: '',
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <ModalDialog>
                <Modal.Header>
                  <Modal.Title>Add New Exam</Modal.Title>
                </Modal.Header>
                <Fragment>
                  <Modal.Body>
                    <div>
                      <TextField label="Title" name="Title" type="text" />
                      <TextField
                        label="Description"
                        name="Description"
                        type="text"
                      />
                      <TextField
                        label="Start Date"
                        name="Start Date"
                        type="date"
                      />
                      <TextField label="End Date" name="End Date" type="date" />
                      <TextField label="Duration" name="Duration" type="time" />
                      <TextField
                        label="Attempts Allowed"
                        name="Attempts Allowed"
                        type="number"
                      />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className="btn btn-dark mt-3" type="submit">
                      Save
                    </Button>
                    <Button className="btn btn-danger mt-3 ml-3" type="reset">
                      Reset
                    </Button>
                    <Button variant="primary" onClick={closeModalHandler}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Fragment>
              </ModalDialog>
            </Form>
          </Formik>
        </Modal>
        </Col>
      </Row>
      
      <Row className="mb-4">
      <Col>
            <form>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 search-button"
            aria-label="Search"
          />
        </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ModalForm;

{
  /* <Modal.Header>
      <Modal.Title>Add New User</Modal.Title>
    </Modal.Header> */
}
