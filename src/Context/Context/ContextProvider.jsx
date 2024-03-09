import { GlobalContext } from "./Context";

function ContextProvider({ children }) {
  const meaning = 42;
  return (
    <>
      <GlobalContext.Provider value={{ meaning }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
