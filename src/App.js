import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MainComponent from './mainComponent';
import Raw from './Raw';
import Option from './Option';
import Demo from './useMemo';
import Childcomponent from './useCallBack'
import { useCallback } from 'react';

function App() {
 const [add,setAdd]=useState(0)
    const [count, setCount] = useState(0)
const incrementAdd = useCallback(() => {
  setAdd(add + 1)
}, [add])
// const incrementNumber = useCallBack(() => {
//   setNumber(number + 1)
// }, [number])
 
const incrementCounter = useCallback(() => {
  setCount(count + 1)
}, [count])

  return (
    <div className="App">
      <h2>example</h2>
      <MainComponent/>
      <Raw/>
      <Option/>
      <Demo/>
      <Childcomponent data={incrementCounter}/>
      <button onClick={()=>{setAdd(add+10)}}>ADD</button>
        <button onClick={incrementCounter}>
        Increase counter
      </button>
    </div>
  );
}

export default App;
