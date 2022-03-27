import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

export default function ForgotPassword() {
	const [show, setShow] = useState(false);
	const [emailId, setemailId] = useState();
	return (
		<>
			<Container>
				{show && (
					<>
						<Alert show={show} variant="success">
							<Alert.Heading>Success</Alert.Heading>
							<p>
								Your email has been successfully sent. Please reset your
								password.
							</p>
							<hr />
							<div className="d-flex justify-content-end">
								<Button
									onClick={() => setShow(false)}
									variant="outline-success"
								>
									Close
								</Button>
							</div>
						</Alert>
					</>
				)}
				<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
					Please enter your email address.
				</h1>
				<Row className="mt-1">
					<Col
						lg={5}
						md={6}
						sm={12}
						className="p-5 m-auto shadow-sm rounded-lg"
					>
						<Form>
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									value={emailId}
									onChange={(e) => setemailId(e.target.value)}
									type="email"
									placeholder="Enter email"
									required
								/>
							</Form.Group>
							<br />

							<Button
								variant="success btn-block"
								onClick={() => {
									setShow(true);
									setemailId("");
								}}
							>
								Continue
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}
