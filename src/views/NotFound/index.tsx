import "./notfound.less"
import not_found from "@/assets/svg/not_found.svg"
import { Link } from "react-router-dom"; 

function NotFound () {

    
    return (
        <div className="not-found">
            <h2>Sorry, Page Not Found!</h2>
            <p>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
            <Link to="/">Back to Home</Link>
            <img src={not_found} alt="" />
        </div>
    )
};
 
export default NotFound;