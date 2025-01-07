import React from "react";
import { useTheme, ThemeProvider } from "./ThemeContext";
import "./App.css";


// The Switch component to toggle theme
const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}  // Toggle based on current theme
        onChange={toggleTheme}  // Toggle theme when clicked
      />
      <span className="slider round" />
    </label>
  );
};

// Title component
const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",  // Text color changes based on theme
      }}
    >
      {children}
    </h2>
  );
};

// Paragraph component
const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",  // Text color changes based on theme
      }}
    >
      {children}
    </p>
  );
};

// Content component with sample content
const Content = () => {
  return (
    <div>
      <Paragraph>
        Welcome to this React-based project where you can easily switch between
        light and dark themes! This application uses React's Context API and
        hooks to manage the theme state across different components.
      </Paragraph>
      <Paragraph>
        The theme preference is applied globally to the entire application.
      </Paragraph>
    </div>
  );
};


// Header component to show the title and switch
const Header = () => {
  return (
    <header>
      <Title>React Dynamic Theme Switcher  🌟 </Title>
      <Switch />
    </header>
  );
};

// Page component containing the content section
const Page = () => {
  return (
    <div className="Page">
      <Title>Hello</Title>
      <Content />
    </div>
  );
};

// Main App component with dynamic background based on theme
function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`App ${theme}`}  // Add theme class dynamically (light or dark)
      style={{
        backgroundColor: theme === "light" ? "white" : "black",  // Background color changes based on theme
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

// Root component with ThemeProvider wrapping the App
function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
