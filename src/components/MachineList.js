import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Machine from './Machine';

const MachineList = ({type, stock}) => {

  const[tier1] = useState({
    name: "T1",
    speed: 1,
    cost: {
      stone: 10,
      wood: 10,
    }
  });

  const[tier2] = useState({
    name: "T2",
    speed: 10,
    cost: {
      stone: 100,
      wood: 100,
    }
  });

  const[tier3] = useState({
    name: "T3",
    speed: 100,
    cost: {
      stone: 1000,
      wood: 1000,
    }
  });

  let stockInfo = (tier) => {
    let stoneStock = localStorage.getItem('stone-stock');
    let woodStock = localStorage.getItem('wood-stock');

    if (stoneStock < tier.cost.stone || woodStock < tier.cost.wood) {
      console.log("Stone: "+stoneStock);
      console.log(tier.cost.stone);
      return "disabled";
    }
    else {
      return "";
    }
  };

    return (
      <div className="machine-card">
        <Card bg="secondary" text="dark">
          <Card.Header>
            <Button>
              {type} Machines
            </Button>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className={stockInfo(tier1)}><Machine type={type} tier={tier1}/></ListGroup.Item>
            <ListGroup.Item className={stockInfo(tier2)}><Machine type={type} tier={tier2}/></ListGroup.Item>
            <ListGroup.Item className={stockInfo(tier3)}><Machine type={type} tier={tier3}/></ListGroup.Item>
          </ListGroup>

        </Card>
      </div>
    )
}
 export default MachineList;
