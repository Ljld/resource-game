import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Machine from './Machine'

class MachineList extends Component {

  state = {
    tier1: {
      name: "T1",
      speed: 1,
      cost: {
        stone: 10,
        wood: 10,
      },
    },
    tier2: {
      name: "T2",
      speed: 10,
      cost: {
        stone: 100,
        wood: 100,
      },
    },
    tier3: {
      name: "T3",
      speed: 100,
      cost: {
        stone: 1000,
        wood: 1000,
      },
    },
  }



  render() {
    return (
      <div className="machine-card">
        <Card bg="secondary" text="dark">
          <Card.Header>
            <Button>
              {this.props.type} Machines
            </Button>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className={this.props.stock < this.state.tier1.cost.wood && 'disabled'}><Machine type={this.props.type} tier={this.state.tier1} mining={this.props.mining} addResource={this.props.addResource}/></ListGroup.Item>
            <ListGroup.Item className={this.props.stock < this.state.tier2.cost.wood && 'disabled'}><Machine type={this.props.type} tier={this.state.tier2} mining={this.props.mining} addResource={this.props.addResource}/></ListGroup.Item>
            <ListGroup.Item className={this.props.stock < this.state.tier3.cost.wood && 'disabled'}><Machine type={this.props.type} tier={this.state.tier3} mining={this.props.mining} addResource={this.props.addResource}/></ListGroup.Item>
          </ListGroup>

        </Card>
      </div>
    )
  }
}
 export default MachineList;
