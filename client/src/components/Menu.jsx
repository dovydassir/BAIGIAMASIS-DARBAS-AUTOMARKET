import { useState } from "react";
import { Link } from "react-router-dom";

function Menu({ resetCarForm }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="menu" aria-label="Pagrindinis meniu">
            <button
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-controls="main-menu"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? "X Uždaryti" : "= Meniu"}
            </button>
            
            <div
            id="main-menu"
            className={isOpen ? "menu-links open" : "menu-links"}
            >
                <Link to="/" onClick={closeMenu}>Pagrindinis puslapis</Link>

                <Link to="/cars" onClick={closeMenu}>Automobiliai</Link>

                <Link to="/add-car" onClick={() => {
                    resetCarForm();
                    closeMenu();
                }}
                >
                Prideti automobilį

                </Link>

                <Link to="/inquiries" onClick={closeMenu}>Užklausos</Link>
            </div>
        </nav>
    )
}

export default Menu