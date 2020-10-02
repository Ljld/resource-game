import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Resource from './components/Resource';
import './App.css';
import MyProvider from './components/MyContext';

class App extends Component {

  state = {
    title : 'My Resource Game'

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

            <h1>{this.state.title}</h1>
            <div className="resource-bar">
              <Resource stock='5' resource='stone' name='Stone ' color='secondary'/>
              <Resource stock='8' resource='food' name='Food ' color='danger'/>
              <Resource stock='12' resource='wood' name='Wood ' color ='warning'/>
            </div>
          
        </header>
      </div>
    );
  }
}

export default App;
