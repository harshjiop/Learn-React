import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [Length, setLength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [Characters, setCharacters] = useState(false);
  const [Password, setPassword] = useState("");
  const PasswordRef = useRef(null);
  const Passwordgenrater = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (Characters) str += "@#$%&*(){},?[]";
    for (let i = 0; i <= Length; i++) {
      const Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char);
    }
    setPassword(pass);
    console.log("one");
    console.log("two");
  };

  useCallback(Passwordgenrater, [Length, Number, Characters]);
  const CopyPassword = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, Length);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    Passwordgenrater();
  }, [Length, Number, Characters]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={PasswordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={CopyPassword}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={Length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length: {Length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Characters}
              id="characterInput"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
