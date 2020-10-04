import React, {useState, useEffect, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {StoneContext} from './MyContexts';

const Machine = ({type, tier}) => {

  const [activity, setActivity] = useState(false);

  /*useEffect(() => {
    switch (type) {
      case 'stone':
        localStorage.setItem('stone-stock', stock);
        break;
      case 'food':
        localStorage.setItem('food-stock', stock);
        break;
      case 'wood':
        localStorage.setItem('wood-stock', stock);
        break;

      default:
        console.log("ça marche pas");
        break;
    }

  }, [stock]);*/

  /*function handleCraft () {
    return
  }*/

  /*mining = (amount) => {
    setInterval(() => {
      setStock(stock + amount);
    }, 1000);
  }*/



  let stock = useContext(StoneContext);

  return (
    <div className="machine">
      <p>
        Machine {tier.name}
        {!activity && <Button className='craft-btn' onClick={() => setActivity(true)}>Craft</Button>}
        {!activity && <Badge className='cost-badge' variant="secondary">{tier.cost.stone}</Badge>}
        {!activity && <Badge className='cost-badge' variant="warning">{tier.cost.wood}</Badge>}

      </p>
    </div>
  )
}
 export default Machine;
