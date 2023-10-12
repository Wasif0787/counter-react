import { useState } from 'react'
import './App.css'



function App() {

  let [counter, setCounter] = useState(15)

  // let counter=25;

  const addValue = () => {
    if (counter < 20) {
      // counter=counter+1;
      //if weat to add 1 fourt times dont do 
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);// if done this it will only add 1 not 4 because it uses bundle and sees that all re same work so do onlu one time
      // instead do 
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      console.log("Clicked", counter);
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      // counter=counter+1;
      setCounter(counter - 1);
      console.log("Clicked", counter);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button
        onClick={addValue}
      >Add Value:{counter}</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Remove Value:{counter}</button>
    </>
  )
}

export default App
