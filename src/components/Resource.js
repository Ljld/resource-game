import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import MachineList from './MachineList';
import {StoneContext, FoodContext, WoodContext} from './MyContexts.js'

const Resource = ({name, resource, color}) => {

  const [stock, setStock] = useState(8);

  useEffect(() => {
    switch (resource) {
      case 'stone':
        localStorage.setItem('stone-stock', stock);
        localStorage.getItem('stone-stock');
        break;
      case 'food':
        localStorage.setItem('food-stock', stock);
        localStorage.getItem('food-stock');
        break;
      case 'wood':
        localStorage.setItem('wood-stock', stock);
        localStorage.getItem('wood-stock');
        break;

      default:
        console.log("ça marche pas");
        break;
    }

  }, [stock]);


  /*mining = (amount) => {
    setInterval(() => {
      setStock(stock + amount);
    }, 1000);
  }*/

  return (
    <div className="resource-frag">
      <Button className='resource-btn' variant={color} onClick={() => setStock(stock + 10)}>
          {name}
          <span className="badge badge-light stock-badge" id="stone-span">{stock}</span>
      </Button>

      <StoneContext.Provider value={stock}>
        <MachineList type={resource} stock={stock} setStock={setStock}/>
      </StoneContext.Provider>
    </div>
  )

}

export default Resource;
