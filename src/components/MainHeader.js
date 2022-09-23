import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
    //it will refresh the page
    return (<header className={classes.header}>
        <ul>
            <li>
                <Link to="/welcome">Welcome</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
        </ul>
    </header>)
}

export default MainHeader;