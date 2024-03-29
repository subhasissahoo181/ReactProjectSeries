import {useState} from 'react';
import './App.css';
function App(){
  let [counter, setCounter] = useState(0);
  const addCounter = ()=>{
    setCounter(counter+1);
  }
  const deleteCounter = () =>{
  setCounter((counter-1)<0? 0 :(counter-1));

  }
  return(
    <>
      <h1>Counter Project Using React.</h1>
      <p>The counter number is {counter}</p>
      <button onClick={addCounter}>+</button> &nbsp; <button onClick={deleteCounter}>-</button>
    </>
  );
}

export default App








