import { useState } from "react";

export default function Counter({name}) {

    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count + 1)
    }

    return <div>
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <button onClick={onClick}>Click Me!</button>
        <button onClick={onClick}>Clear</button>
    </div>
}