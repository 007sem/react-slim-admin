import { useState } from "react";


function Home () {

    const [ count, setCount ] = useState<number>(0)
    
    return (
        <div>
            Home
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
};
 
export default Home;