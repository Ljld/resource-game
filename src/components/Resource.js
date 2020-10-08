import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import MachineList from './MachineList';
import {StoneContext} from './MyContexts.js'

const Resource = ({name, resource, color}) => {

  const [thisStock, setThisStock] = useState(8);

  useEffect(() => {
    switch (resource) {
      case 'stone':
        localStorage.setItem('stone-stock', thisStock);
        localStorage.getItem('stone-stock');
        break;
      case 'food':
        localStorage.setItem('food-stock', thisStock);
        localStorage.getItem('food-stock');
        break;
      case 'wood':
        localStorage.setItem('wood-stock', thisStock);
        localStorage.getItem('wood-stock');
        break;

      default:
        console.log("ça marche pas");
        break;
    }

  }, [thisStock, resource]);


  /*mining = (amount) => {
    setInterval(() => {
      setStock(stock + amount);
    }, 1000);
  }*/

  return (
    <div className="resource-frag">
      <Button className='resource-btn' variant={color} onClick={() => setThisStock(thisStock + 10)}>
          {name}
          <span className="badge badge-light stock-badge" id="stone-span">{thisStock}</span>
      </Button>

      <StoneContext.Provider value={thisStock}>
        <MachineList type={resource} stock={thisStock} setStock={setThisStock}/>
      </StoneContext.Provider>
    </div>
  )

}

export default Resource;
