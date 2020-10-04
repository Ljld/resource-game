import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Resource from './components/Resource';
import './App.css';

const App = () => {

    return (
      <div className="App">
        <header className="App-header">
          <h1>My Resource Game</h1>
          <div className="resource-bar">
            <Resource resource={'stone'} name={'Stone '} color={'secondary'}/>
            <Resource resource={'food'} name={'Food '} color={'danger'}/>
            <Resource resource={'wood'} name={'Wood '} color={'warning'}/>
          </div>
        </header>
      </div>
    );


}

export default App;
