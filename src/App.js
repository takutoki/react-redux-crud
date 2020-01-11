import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">Bar!!!</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} />
    </React.Fragment>
  );
}

export default App;
