import React, { useState, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Modal, ModalDialog,radio } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import Select from './Select';
import SearchBar from './SearchBar';
import UserData from './data.json';
import * as Yup from 'yup';
import Genderselect from './Genderselect'

function ModalForm(props) {
  const [modal, setModal] = useState(false);

  function showModalHandler() {
    setModal(true);
  }

  function closeModalHandler() {
    setModal(false);
  }

  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is Invalid').required('Email is Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is Required'),
    mobile: Yup.string()
    .max(10, 'Mobile number should be 10 digits')
    .min(10, 'Mobile number should be 10 digits')
    .required('Mobile number is Required'),
    role: Yup.string().required('Required'),
  });

  const { ...rest } = props;
  const dropDownOptions = [
    { key: 'Select Role', value: '' },
    { key: 'Administrator', value: 'Administrator' },    
    { key: 'Student', value: 'Student' },
  ];

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Button variant="outline-dark">Manage Users</Button>
        </Col>
        <Col>
          <Button
            variant="primary"
            size="md"
            onClick={showModalHandler}
            className="new-user-button"
          >
            Add New User
          </Button>
          <Modal show={modal}>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                mobile:'',
                role: '',
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <ModalDialog>
                  <Modal.Header>
                    <Modal.Title>Add New User</Modal.Title>
                  </Modal.Header>
                  <Fragment>
                    <Modal.Body>
                      <TextField label="Name" placeholder="Enter name" name="name" type="text" />
                      <TextField label="Email" placeholder="Enter email" name="email" type="email" />
                      <TextField placeholder="Enter password"
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <Genderselect />
                        
                      <TextField label="Mobile Number" placeholder="Enter Mobile Number" name="mobile" type="text" />

                      <Select
                        {...rest}
                        control="select"
                        name="role"
                        options={dropDownOptions}
                      />
                    </Modal.Body>
                    
                    <Modal.Footer>
                      <Button variant="primary" type="submit" >
                        Save
                      </Button>
                      <Button variant="primary" type="reset">
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
        <SearchBar data={UserData} />
      </Row>
    </Container>
  );
}

export default ModalForm;
