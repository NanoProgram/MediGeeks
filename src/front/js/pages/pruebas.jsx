import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const Prueba = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value) setSelectedOption2(true);
  };
  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
    if (e.target.value) setSelectedOption3(true);
  };
  const handleSelectChange3 = (e) => {
    setSelectedOption3(e.target.value);
    if (e.target.value) setSelectedOption4(true);
  };
  return (
    <Form>
      <FormGroup>
        <Label for="selectOption1">Select an option 1</Label>
        <Input type="select" id="selectOption1" onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="selectOption2">Select an option 2</Label>
        <Input
          type="select"
          id="selectOption2"
          disabled={!selectedOption2}
          onChange={handleSelectChange2}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="selectOption3">Select an option 3</Label>
        <Input
          type="select"
          id="selectOption3"
          disabled={!selectedOption3}
          onChange={handleSelectChange3}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="selectOption4">Select an option 4</Label>
        <Input type="select" id="selectOption4" disabled={!selectedOption4}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Input>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};
