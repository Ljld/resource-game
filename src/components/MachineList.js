import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Machine from "./Machine";
import useObjState from "../hooks/useObjState";
import { usePersistedState } from "../App";

const MachineList = ({ type }) => {
  const [food] = usePersistedState("stockFood");
  const [wood] = usePersistedState("stockWood");
  const [stone] = usePersistedState("stockStone");
  //  const stockObj = useContext(GlobalStockContext);

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

  /*let stockInfo = (tier) => {
    let stoneStock = localStorage.getItem('stone-stock');
    let woodStock = localStorage.getItem('wood-stock');

    if (stoneStock < tier.cost.stone || woodStock < tier.cost.wood) {
      //console.log("Stone: "+stoneStock);
      //console.log(tier.cost.stone);
      return "disabled";
    }
    else {
      return "";
    }
  };*/
  return (
    <div className="machine-card">
      <Card bg="secondary" text="dark">
        <Card.Header>
          <Button>{type} Machines</Button>
        </Card.Header>

        <ListGroup variant="flush">
          <ListGroup.Item
            className={stone >= 10 && wood >= 10 ? "" : "disabled"}
          >
            <Machine type={type} tier={tier1} />
          </ListGroup.Item>
          <ListGroup.Item
            className={stone >= 100 && wood >= 100 ? "" : "disabled"}
          >
            <Machine type={type} tier={tier2} />
          </ListGroup.Item>
          <ListGroup.Item
            className={stone >= 1000 && wood >= 1000 ? "" : "disabled"}
          >
            <Machine type={type} tier={tier3} />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
export default MachineList;
