import React, { useState, useContext } from "react";

// Create ThemeContext
export const ThemeContext = React.createContext();

// Implement the ThemeProvider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
