import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Machine from "./Machine";
import useObjState from "../hooks/useObjState";

const MachineList = ({ type }) => {

  const [tier1] = useObjState({
    name: "T1",
    speed: 1,
    cost: {
      stone: 10,
      wood: 10,
    },
  });

  const [tier2] = useState({
    name: "T2",
    speed: 10,
    cost: {
      stone: 100,
      wood: 100,
    },
  });

  const [tier3] = useState({
    name: "T3",
    speed: 100,
    cost: {
      stone: 1000,
      wood: 1000,
    },
  });

  return (
    <div className="machine-card">
      <Card bg="secondary" text="dark">
        <Card.Header>
          <Button>{type} Machines</Button>
        </Card.Header>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <Machine type={type} tier={tier1} />
          </ListGroup.Item>
          <ListGroup.Item>
            <Machine type={type} tier={tier2} />
          </ListGroup.Item>
          <ListGroup.Item>
            <Machine type={type} tier={tier3} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
export default MachineList;
