import "./App.css";
import TodoReducer from "./components/TodoReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CounterState /> */}
        {/* <CounterReducer /> */}
        <TodoReducer />
      </header>
    </div>
  );
}

export default App;
