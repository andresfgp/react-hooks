import React from "react";
import ThemeContext from '../context/ThemeContext'

const Header = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const color = React.useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="header">
            <h1 style={{color}}>React Hooks</h1>
            <button type="button" onClick={handleClick}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
        </div>
    );
};

export default Header;
