import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Public from "./Routes/Public/Public";
import ContextProvider from "./Context/Context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Public> </Public>
        </BrowserRouter>
        <h1>World</h1>
      </ContextProvider>
    </>
  );
}

export default App;
