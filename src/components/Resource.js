import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import MachineList from './MachineList';
import MyProvider from './components/MyContext';
import MyContext from './components/MyContext';

class Resource extends Component {

  state = {
    stock: 8
  }

  mining = (amount) => {
    setInterval(() => {
      this.setState({
        stock : this.state.stock + amount
      })
    }, 1000);


  }

  addResource = (amount) => {
    this.setState({
      stock : this.state.stock + amount
    })
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div className="resource-frag">
        <MyProvider>
          <Button className='resource-btn' variant={this.props.color} onClick={() => this.addResource(1)}>
              {this.props.name}
              <span className="badge badge-light stock-badge" id="stone-span">{this.state.stock}</span>
          </Button>

          <MachineList type={this.props.name} stock={this.state.stock} mining={this.mining} addResource={this.addResource}/>
        </MyProvider>
      </div>
    )
  }
}

export default Resource;
