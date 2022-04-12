import './App.css';

function App() {
  const myApp = {
    name: 'My',
    lastName: 'App'
  };
  return (
    <div className="App">
      <h1>{myApp.name} <div>{myApp.lastName}</div></h1>
    </div>
  );
}

export default App;
