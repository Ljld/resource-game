import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Machine from './Machine';
import useObjState from '../hooks/useObjState';


const MachineList = ({type, stock}) => {

//  const stockObj = useContext(GlobalStockContext);

  const[tier1, setTier1] = useObjState({
    name: "T1",
    speed: 1,
    cost: {
      stone: 10,
      wood: 10,
    },
    active: "disabled"
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

  const [tier1Active, setTier1Active] = useState('disabled');




  useEffect(() => {
    console.log("useEffect");
    window.onstorage = () => {
      console.log("triggered");
      const stoneStock = localStorage.getItem('stone-stock');
      const woodStock = localStorage.getItem('wood-stock');

      if (stoneStock < tier1.cost.stone || woodStock < tier1.cost.wood) {
        //console.log("Stone: "+stoneStock);
        //console.log(tier1.cost.stone);
        setTier1Active('disabled');
      }
      else {
        setTier1Active('');
      }
    };
  }, [setTier1, tier1.cost.stone, tier1.cost.wood]);


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
            <Button>
              {type} Machines
            </Button>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className={tier1Active ? "disabled" : ""}><Machine type={type} tier={tier1}/></ListGroup.Item>
            <ListGroup.Item>
              <Machine type={type} tier={tier2}/>
            </ListGroup.Item>
            <ListGroup.Item><Machine type={type} tier={tier3}/></ListGroup.Item>
          </ListGroup>

        </Card>
      </div>
    )
}
 export default MachineList;
