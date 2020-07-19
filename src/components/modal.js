//@flow
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

type boxModalTypes = {
	modalStatus: Boolean,
	handleClose: () => {},
	gifSelected: Object,
};

function BoxModal(props: boxModalTypes) {
	if (!props.gifSelected) {
		return <div></div>;
	}
	return (
		<div>
			<Modal
				show={props.modalStatus}
				onHide={props.handleClose}
				backdrop="static"
				keyboard={true}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						{props.gifSelected.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="justify-content-center">
							<Form>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column xs="2">
										Link:
									</Form.Label>
									<Col xs="10">
										<Form.Control defaultValue={props.gifSelected.url} />
									</Col>
								</Form.Group>
							</Form>
						</Row>
						<Row className="justify-content-center">
							<img
								className="imgModal"
								src={props.gifSelected.images.downsized.url}
								alt=""
							/>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default BoxModal;
