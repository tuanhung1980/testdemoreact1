import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';

class App extends React.Component {
  state = {
    name: 'Leonardo Di Caprio',
    address: 'Gelexia',
    age: 24
  };
  handleClick(event){
    console.log("Clicked me button");
    console.log("Hello, " + this.state.name + ", new random=", Math.floor((Math.random() * 100) + 1));
    this.setState({
      name:  "Sieu nhan mat ong"
    });
  }
  mouseOver(event) {
    console.log(event);
  }
  render(){
    return(
      <div>Hello, have a nice day, {this.state.name} from {this.state.address}
          
          <button onClick={(event) => this.handleClick(event)} onMouseOver={this.mouseOver}>click me</button>
      </div>
    );
  }
}
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Have a nice day, Leo. 
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>

    
//   );
// }

export default App;
