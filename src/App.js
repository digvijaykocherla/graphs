
import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/Dashboard.css';

function App() {
  const barData1 = [
    { name: 'linux', value: 250 },
    { name: 'mac', value: 300 },
    { name: 'ios', value: 200 },
    { name: 'android', value: 400 },
    { name: 'others', value: 150 },
  ];

  const barData2 = [
    { name: 'jan', value: 2400 },
    { name: 'feb', value: 4000 },
    { name: 'march', value: 9800 },
    { name: 'april', value: 3000 },
    { name: 'may', value: 5500 },
    { name: 'june', value: 2638 },
    { name: 'july', value: 6893 },
    { name: 'aug', value: 4500 },
  ];



  return (
    <div className="App">
      <Dashboard barData1={barData1} barData2={barData2}/>
    </div>
  );
}

export default App;
