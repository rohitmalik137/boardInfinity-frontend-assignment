import React from 'react';
import './App.css';
import InputForm from './components/inputForm/inputForm.component';
import TweetsContainer from './components/tweetsContainer/tweetsContainer.component';

function App() {
  return (
    <div className="App">
      <InputForm />
      <TweetsContainer />
    </div>
  );
}

export default App;
