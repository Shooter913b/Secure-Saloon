import React from "react";

import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card,
  CardBody
} from "reactstrap";

const Forms = () => {
  return (
    <Card>
      <CardBody>
        <form>
          <FormGroup>
           <Label for="exampleText">Post</Label>
           <Input type="textarea" name="text" id="exampleText" />
         </FormGroup>
          <Button color="primary" type="submit">
            Post
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};


export default Forms;
