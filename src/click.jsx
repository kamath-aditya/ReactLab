import { useState } from "react"

export default function Click() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Click Counter</h1>
            <button 
                onClick={() => setCount(count + 1)}
                style={{ padding: '10px 20px', cursor: "pointer"}}
            >Click me</button>
            <p>Number of clicks = {count}</p>
        </div>
    )
}