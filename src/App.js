import './styles.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export default function App() {
  const [customNumber, setCustomNumber] = useState(10)
  const [showText, setShowText] = useState(false)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  function increment() {
    dispatch(
      { type: "INC" }
    )
  }
  function decrement() {
    dispatch(
      { type: "DEC" }
    )
  }
  function Text() {
    if (showText) {
      if(!customNumber || Number(customNumber) === 0){
        return (<p className="text">What you expect me to do now?</p>);
      }
    }
  }
  function customAdd() {
    if (!customNumber || Number(customNumber) === 0) {
      setShowText(true)
    } 
    dispatch(
      {
        type: "CUSTOM_ADD",
        payload: Number(customNumber)
      }
    )
  }
  function changeCustomNumber(event) {
    setShowText(false)
    setCustomNumber(event.target.value)
  }
  useEffect(() => {
    setShowText(false)
  }, [counter])
  return (
    <div className="App">
      <h1 className="header">Counter App Using Redux.</h1>
      <h2 className="counter">{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={customAdd}>Add/Remove By {customNumber}</button>
      <input type="number" name="input" value={customNumber} onChange={changeCustomNumber} />
      <Text />
    </div>
  );
}