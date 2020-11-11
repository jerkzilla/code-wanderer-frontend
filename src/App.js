import React from 'react';

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/categories')
    .then(resp => resp.json())
    .then(data => console.log(data[0].resources))
  }
  
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
  
}

export default App;
