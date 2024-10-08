import React from 'react';

class Display extends React.Component {
  
   state = {
    count:0
   }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if(this.state.count > 0){
    this.setState({ count: this.state.count - 1 });
    };
  };

  render() {
    return (
      <div>
        <h1>THIS IS FROM CLASS</h1>
        <h1>Number {this.state.count}</h1>
        <button className='button' onClick={this.increment}>Increment</button>
        <button className='button' onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Display;
