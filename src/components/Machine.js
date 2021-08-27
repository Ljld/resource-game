import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { usePersistedState } from "../App";

const Machine = ({type, tier}) => {

  const [activity, setActivity] = useState(false);

  const [stone, setStoneStock] = usePersistedState("stone-stock");
  const [food, setFoodStock] = usePersistedState("food-stock");
  const [wood, setWoodStock] = usePersistedState("wood-stock");
  
  const handleCraft = () => {
    if (stone >= tier.cost.stone && wood >= tier.cost.wood) {
      setActivity(true);
      setStoneStock((prevCount) => prevCount - tier.cost.stone);
      setWoodStock((prevCount) => prevCount - tier.cost.wood);
    }
    
  }

  const handleMining = () => {
    if (type === 'Stone') {
      setStoneStock(stone + tier.cost.stone);
    }
    else if (type === 'Food') {
      if (food >= 1) {
        setFoodStock(food + tier.cost.stone);
      }
      else {
        setFoodStock(tier.cost.stone);
      }
    }
    else if (type === 'Wood') {
      setWoodStock(wood + tier.cost.stone);
    }
  }

  return (
    <div className="machine">
      <p>
        Machine {tier.name}
        {activity && <Button className='craft-btn' onClick={handleMining}> + {tier.cost.stone}</Button>}
        {!activity && <Button className={stone >= tier.cost.stone && wood >= tier.cost.wood ? "craft-btn" : "craft-btn disabled"} onClick={handleCraft}>Craft</Button>}
        {!activity && <Badge className='cost-badge' variant="secondary">{tier.cost.stone}</Badge>}
        {!activity && <Badge className='cost-badge' variant="warning">{tier.cost.wood}</Badge>}

      </p>
    </div>
  )
}
 export default Machine;
