import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setinfo] = useState([]);

  const addInfo = () => {
    setinfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setinfo(info.filter(i => i.number !== number));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder={"Enter device name"} className="mt-3" />
          <Form.Control
            placeholder={"Enter price"}
            className="mt-3"
            type="number"
          />
          <Form.Control className="mt-4 mb-2" type="file" />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Add Description
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="Enter device name"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Enter device description"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
