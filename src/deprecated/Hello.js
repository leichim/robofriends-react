import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return(
      <div className="Hello f1 tc">
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

/**
 * This is the same as above, we're just passing functions
 * 
 * @param {properties} props 
 */
const functionHello = (props) => {
    return(
    <div className="Hello f1 tc">
        <h1>{props.greeting}</h1>
    </div>
    )
}
  

export default Hello;