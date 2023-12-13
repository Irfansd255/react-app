import { useSelector } from "react-redux";
import "./App.css";
import ButtonDE from "./components/ButtonDE";
import Card from "./components/Card";

function App() {
  const show = useSelector(state => {
    console.log(state.data.value);

    return state.data.value;

  });

  return (
    <div className="App">

      <h1>Counter {show}</h1>
      <Card />
      <hr />
      <ButtonDE />
    </div>
  );
}

export default App;
