import React, { createContext, useEffect, useState } from 'react';
const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  // const [rootData, setRootData] = useState([]);
  const [utilData, setUtilData] = useState([]);
  const [imageStyle, setImageStyle] = useState([]);
  // const [csStyleData, setCSStyleData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(1);
  const [auth, setAuth] = useState();

  const uri = `${process.env.REACT_APP_WEB_SERVER}`;

  // const getStyleData = async (path) => {
  //   const response = await fetch(
  //     `${uri}/${process.env.REACT_APP_SERVICE_PATH}/${path}`
  //   );

  //   if (response.ok) {
  //     const result = await response.json();
  //     // if (path === process.env.REACT_APP_ARP_IMAGE) setImageStyle(result);

  //     path === process.env.REACT_APP_ARP_CS
  //       ? setCSStyleData(result)
  //       : path === process.env.REACT_APP_ARP_ROOT
  //       ? setRootData(result)
  //       : setUtilData(result);

  //     console.log(csStyleData);
  //   } else {
  //     throw new Error('System Error');
  //   }
  // };

  const getPortfolioData = async () => {
    const res = await fetch(`${uri}/${process.env.REACT_APP_PORTFOLIO}`);
    if (res.ok) {
      const result = await res.json();

      setUtilData(result);
      console.log(result);
    }
  };
  useEffect(() => {
    getPortfolioData();
    // setTimeout(() => {
    //   if (utilData) getPortfolioData();
    // }, 3000);
    // getStyleData(process.env.REACT_APP_ARP_ROOT);

    // setTimeout(() => {
    //   getStyleData(process.env.REACT_APP_ARP_IMAGE);
    // }, 1000);

    // setTimeout(() => {
    //   getStyleData(process.env.REACT_APP_ARP_ROOT);
    // }, 2000);

    // setTimeout(() => {
    //   getStyleData(process.env.REACT_APP_ARP_UTIL);
    // }, 3800);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const getAuth = () => {
    setAuth(localStorage.getItem(process.env.REACT_APP_QUERY_KEYS));
  };

  return (
    <>
      <ServiceContext.Provider
        value={{
          uri,
          // rootData,
          utilData,
          imageStyle,
          // csStyleData,
          // getStyleData,
          isDarkMode,
          toggleTheme,
          getAuth,
          auth,
        }}
      >
        {children}
      </ServiceContext.Provider>
    </>
  );
};

export { ServiceContext, ServiceProvider };
