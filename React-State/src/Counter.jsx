import { useState } from "react";

export default function Counter() {
   
    let [count , setCount] = useState(0);

    let incMent=()=>{
        setCount(count+1);
        console.log(count);
    };

    return(
        <>
        <h2>Counter = {count}</h2>
        <button onClick={incMent}>Increment Count</button>
        
        </>

    )
}