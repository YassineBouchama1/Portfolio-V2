import React,{useState ,createContext} from "react";
// import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState("light");

  const toggeltheme = () => {
    themename === "light" ? setthemename("dark") : setthemename("light");
  };

  return (
    <ThemeContext.Provider value={[{ themename, setthemename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired
// };

export { ThemeProvider, ThemeContext };
