import './App.css';
import Counter from './components/Counter';

function App() {
  const nameData = "bob";
  return <div>
    <Counter name={nameData}></Counter>
  </div>
}

export default App;
