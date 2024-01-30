import { useState } from "react";

function MenegeGoods () {
    const [ count, setCount ] = useState<number>(0)
    
    return (
        <div>
            MenegeGoods
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
};
 
export default MenegeGoods;