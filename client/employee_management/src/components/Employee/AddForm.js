import React, { useState } from "react";
import { Row, Col, Form, Container, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import { closeForm } from "../../components/Employee/CloseForm";

const addUrl = "http://localhost:3002/api/add/employees/";

function AddForm() {
  const [employee, setEmployee] = useState({
    firstname: "",
    lastname: "",
    profession: "",
    email: "",
    // city: '',
    assigned: false,
  });

  const onChangeFirstname = (event) => {
    setEmployee({
      ...employee,
      firstname: event.target.value,
    });
  };
  const onChangeLastname = (event) => {
    setEmployee({
      ...employee,
      lastname: event.target.value,
    });
  };

  const onChangeProfession = (event) => {
    setEmployee({
      ...employee,
      profession: event.target.value,
    });
  };

  const onChangeEmail = (event) => {
    setEmployee({
      ...employee,
      email: event.target.value,
    });
  };

  // const onChangeCity = event => {
  //   setEmployee({
  //     ...employee,
  //     city: event.target.value,
  //   });
  // };

  const isInputFieldEmpty = () => {
    return (
      employee.firstname === "" ||
      employee.lastname === "" ||
      employee.profession === "" ||
      employee.email === "" ||
      // employee.city === '' ||
      employee.assigned === null
    );
  };

  const handleSubmit = () => {
    axios.post(addUrl, employee).then((res) => {
      console.log(res.data.data);
      closeForm();
    });
  };

  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Please fill out the form to add an employee and then click the
              submit button.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Add Employee</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="addName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="firstname"
                      placeholder="Please enter first name"
                      value={employee.firstname}
                      onChange={onChangeFirstname}
                    />
                  </Form.Group>
                  <Form.Group controlId="addName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastname"
                      placeholder="Please enter last name"
                      value={employee.lastname}
                      onChange={onChangeLastname}
                    />
                  </Form.Group>
                  <Form.Group controlId="addProfession">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="profession"
                      placeholder="Please enter job title"
                      value={employee.profession}
                      onChange={onChangeProfession}
                    />
                  </Form.Group>
                  <Form.Group controlId="addCity">
                    <Form.Label>Email : </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="email"
                      placeholder="Please enter your email"
                      value={employee.email}
                      onChange={onChangeEmail}
                    />
                  </Form.Group>

                  {/* <Form.Group controlId="addCity">
                    <Form.Label>City: </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="city"
                      placeholder="Please enter your city"
                      value={employee.city}
                      onChange={onChangeCity}
                    />
                  </Form.Group> */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => closeForm()}
                  >
                    Cancel
                  </Button>
                  <StyledButton
                    className="style-button"
                    size="sm"
                    type="submit"
                    disabled={isInputFieldEmpty()}
                  >
                    Submit
                  </StyledButton>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 50px;
`;

const H6 = styled.h6`
  margin-bottom: 10px;
  color: #858484;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #3277b2;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

export default AddForm;
