import './App.css';
import ProductPage from './ProductPage';
import { Component } from 'react';
import UserProfile from './UserProfile';

class App extends Component {

  render() {
    const user = {
      name: "Jay",
      age: 25,
      location: "NYC"
    }

    return (
      <div className="App">
        <UserProfile name={user.name} age={user.age} location={user.location}/>
        <ProductPage />
      </div>
    );
  }
}

export default App;
