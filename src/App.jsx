import { useState } from "react";
import { UserProvider } from "./components/UserContext";

import "./App.css";
import UserInput from "./components/UserInput";
import Dashbaord from "./components/Dashbaord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <UserInput />
      <Dashbaord />
    </UserProvider>
  );
}

export default App;
