import { useState } from "react";


function Charts () {
    const [ count, setCount ] = useState<number>(0)
    
    return (
        <div>
            Charts
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
};
 
export default Charts;