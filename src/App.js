import React from 'react';

// クラスコンポーネント
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>HogeFooBar!</label>
        <Cat />
      </React.Fragment>
    )
  }
}

// Functional Component (allow)
const Cat = () => {
  return <div>nyaa nyaa</div>
}

// Functional Component
// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">Bar!!!</label>
//       <input type="text" onChange={() => {console.log("I am clicked")}} />
//     </React.Fragment>
//   );
// }

export default App;
