import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count + 1)
    }

    function onClear() {
        setCount(0);
    }

    return <div>
        <div>Name: {props.name}</div>
        <div>Count: {count}</div>
        <button onClick={onClick}>Click Me!</button>
        <button onClick={onClear}>Clear</button>
    </div>
}