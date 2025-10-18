import 'react';
import '../styles/Header.css'

const Header = () => {

    return (
            <header className="header">
                <img 
                    src="images/logo-harry-potter.png" 
                    alt="Harry Potter Logo" 
                    className="header-logo"
                />
            </header>
    )
}

export default Header;