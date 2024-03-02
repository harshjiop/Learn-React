import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [Value, setValue] = useState(17);
  const Addvalue = () => {
    if (Value <= 19) {
      setValue(Value + 1);
    } else {
      toast.error("maximun value 20");
    }
  };
  const RemoveValue = () => {
    if (!Value == 0) {
      setValue(Value - 1);
    } else {
      toast.error("minnmum value 20");
    }
  };

  return (
    <>
      <ToastContainer />
      <h1>This is a Counter App</h1>
      <h2>Counter Value : {Value}</h2>
      <button onClick={Addvalue}>Add Number</button>
      <button onClick={RemoveValue}>Remove Number</button>
    </>
  );
}

export default App;
