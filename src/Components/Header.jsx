import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faLanguage,faBell,faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header className="header">
            <div className="header-left-content">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" className="header-logo" alt="" />
                <h4 className="header-text">Peliculas</h4>
                <h4 className="header-text">Programas de television</h4>
                <h4 className="header-text">Personas</h4>
                <h4 className="header-text hide-on-mobile">Mas</h4>
            </div>
            <div className="header-right-content">
                <h4 className="header-text hide-on-mobile">
                    <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
                </h4>
                <h4 className="header-text hide-on-mobile"><FontAwesomeIcon icon={faLanguage} style={{ color: "#ffffff" }} /></h4>
                <h4 className="header-text hide-on-mobile"><FontAwesomeIcon icon={faBell} style={{ color: "#ffffff" }} /></h4>
                <h4 className="header-text hide-on-mobile"><FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff" }} /></h4>
            </div>
        </header>
    );
}

export default Header;
