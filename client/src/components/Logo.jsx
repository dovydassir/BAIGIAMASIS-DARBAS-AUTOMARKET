import {Link} from "react-router-dom";
import logoImage from "../pictures/auto-market-logo.png";

function Logo() {
    return (
        <Link to="/" className="logo">
            <img
            src={logoImage}
            alt="Auto Market -Pagrindinis puslapis"
            className="logo-image"
            />
        </Link>
    );
}

export default Logo