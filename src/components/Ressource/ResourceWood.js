import React from "react";
import Button from "react-bootstrap/Button";
import MachineList from "../MachineList";
import { StoneContext } from "../MyContexts.js";
import { usePersistedState } from "../../App";

const ResourceWood = ({ name, resource, color }) => {
  const [count, setCount] = usePersistedState("stockWood", 0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /*mining = (amount) => {
    setInterval(() => {
      setStock(stock + amount);
    }, 1000);
  }*/

  return (
    <div className="resource-frag">
      <Button className="resource-btn" variant={color} onClick={increment}>
        {name}
        <span className="badge badge-light stock-badge" id="stone-span">
          {count}
        </span>
      </Button>

      <StoneContext.Provider value={count}>
        <MachineList type={resource} stock={count} setStock={increment} />
      </StoneContext.Provider>
    </div>
  );
};

export default ResourceWood;
