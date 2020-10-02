import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class Machine extends Component {

  componentDidMount() {
    if (this.props.type === 'Stone ') {
      //this.props.mining(this.props.tier.speed);
      console.log('boo');
    }
  };


  render() {
    return (
      <div className="machine">
        <p>
        Machine {this.props.tier.name}
        <Button className='craft-btn' onClick={() => this.props.addResource(-5)}>Craft</Button>
        <Badge className='cost-badge' variant="secondary">{this.props.tier.cost.stone}</Badge>
        <Badge className='cost-badge' variant="warning">{this.props.tier.cost.wood}</Badge>
        </p>
      </div>
    )
  }
}
 export default Machine;
