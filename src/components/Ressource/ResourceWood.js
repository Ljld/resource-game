import React from "react";
import Button from "react-bootstrap/Button";
import MachineList from "../MachineList";
import { usePersistedState } from "../../App";

const ResourceWood = () => {
  const [woodStock, setWoodStock] = usePersistedState("wood-stock", 0);
  const increment = () => {
    setWoodStock(woodStock + 1);
  };

  return (
    <div className="resource-frag">
      <Button className="resource-btn" variant='warning' onClick={increment}>
        Wood&nbsp;
        <span className="badge badge-light stock-badge" id="stone-span">
          {woodStock}
        </span>
      </Button>

      <MachineList type='Wood'/>
    </div>
  );
};

export default ResourceWood;
