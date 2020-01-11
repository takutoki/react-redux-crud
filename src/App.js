import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 15 },
    { name: "Hoge", age: 10 },
  ]

  return (
    <div>
      {
        profiles.map( (profile, index) => {
          return <User key={index} name={profile.name} age={profile.age} />
        })
      }
    </div>
  );
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age : PropTypes.number.isRequired
}

export default App;
