import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import MemoList from './components/MemoList';

function App() {

  const [input, setInput] = useState("")
  const [memoList, setMemoList] = useState([])

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onClick() {
    setMemoList(
      [...memoList, {date: new Date(), text: input } ]
    )
  }

  return <div>
    <Counter name={"bob"} foo="bar"></Counter>

    <input value={input} onChange={onInputChange}/>
    <button onClick={onClick}>Add</button>
    <MemoList list={memoList}/>
  </div>
}

export default App;
