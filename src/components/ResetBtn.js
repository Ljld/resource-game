import React from 'react';
import Button from 'react-bootstrap/Button';
import { usePersistedState } from "../App";

const ResetBtn = ({type, tier}) => {
  const [, setStoneStock] = usePersistedState("stone-stock");
  const [, setFoodStock] = usePersistedState("food-stock");
  const [, setWoodStock] = usePersistedState("wood-stock");
  
  const resetGame = () => {
    setStoneStock(0);
    setWoodStock(0);
    setFoodStock(0);

    window.location.reload();
  }

  return (
    <div className="ResetBtn">
      <Button onClick={resetGame}>Reset</Button>
    </div>
  )
}
 export default ResetBtn;
