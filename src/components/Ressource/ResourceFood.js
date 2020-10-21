import React from "react";
import Button from "react-bootstrap/Button";
import MachineList from "../MachineList";
import { usePersistedState } from "../../App";

const ResourceFood = () => {
  const [foodStock, setFoodStock] = usePersistedState("food-stock", 0);
  const increment = () => {
    setFoodStock(foodStock + 1);
  };

  return (
    <div className="resource-frag">
      <Button className="resource-btn" variant='danger' onClick={increment}>
        Food&nbsp;
        <span className="badge badge-light stock-badge" id="stone-span">
          {foodStock}
        </span>
      </Button>

      <MachineList type='Food'/>
    </div>
  );
};

export default ResourceFood;
