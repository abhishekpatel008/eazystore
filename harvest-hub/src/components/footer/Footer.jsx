import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer(){
    return <footer className="footer">
        <FontAwesomeIcon icon={faCopyright} className="footer-icon" aria-hidden="true"/> Harvest Hub 2026.
    </footer>
}