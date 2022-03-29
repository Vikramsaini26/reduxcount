import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <button
          className="button"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          -
        </button>
        <input type="text" className="input" value={myState} />
        <button
          className="button"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          +
        </button>
      </header>
    </div>
  );
}

export default App;
