import React from "react";

function App() {
  function getData(val)
  {
    console(val)
  }
  return (
    <>
      <h1>Hello Krishna</h1>
      <input type= " text"  onChange= {getData} />
    </>
  );
}
export default App;
