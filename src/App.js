import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Resource from './components/Resource';
import './App.css';
import useObjState from './hooks/useObjState';
import {GlobalStockContext} from './components/MyContexts';


const App = () => {

  const [globalStock] = useObjState({
    stone: localStorage.getItem('stone-stock'),
    food: localStorage.getItem('food-stock'),
    wood: localStorage.getItem('wood-stock')
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resource Game</h1>
        <div className="resource-bar">
          <GlobalStockContext.Provider value={globalStock}>
            <Resource resource={'stone'} name={'Stone '} color={'secondary'}/>
            <Resource resource={'food'} name={'Food '} color={'danger'}/>
            <Resource resource={'wood'} name={'Wood '} color={'warning'}/>
          </GlobalStockContext.Provider>
        </div>
      </header>
    </div>
  );


}

export default App;
