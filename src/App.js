import { useContext } from 'react';
import './App.css';
import CompA from './Components/CompA';
import Home from './pages/Home';
import { AppContext } from './contextApi/AppContext';

const name = 'irfan'

function App() {

  const {counter} = useContext(AppContext)

  return (
    <div className="App">

      <h1>Conter {counter}</h1>

      <CompA a={name} />
      <hr />
      <Home/>
      <hr />
    </div>
  );
}

export default App;
