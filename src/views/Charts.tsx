import { useState } from "react";

import LoadingComponent from "@/components/Loading";


function Charts () {
    const [ count, setCount ] = useState<number>(0)
    
    return (
        <LoadingComponent />
    )
};
 
export default Charts;