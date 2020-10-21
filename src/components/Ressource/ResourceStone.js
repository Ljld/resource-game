import React from "react";
import Button from "react-bootstrap/Button";
import MachineList from "../MachineList";
import { usePersistedState } from "../../App";

const ResourceStone = () => {
  const [stoneStock, setStoneStock] = usePersistedState("stone-stock", 0);
  const increment = () => {
    setStoneStock(stoneStock + 1);
  };

  return (
    <div className="resource-frag">
      <Button className="resource-btn" variant='secondary' onClick={increment}>
        Stone&nbsp;
        <span className="badge badge-light stock-badge" id="stone-span">
          {stoneStock}
        </span>
      </Button>

      <MachineList type='Stone'/>
    </div>
  );
};

export default ResourceStone;
