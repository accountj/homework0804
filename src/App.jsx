import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { CountTodoContextProvider } from "./context/CounterContext";

function App() {
  return (
    <>
      <CountTodoContextProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </CountTodoContextProvider>
    </>
  );
}

export default App;
