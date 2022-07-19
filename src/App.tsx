import React, { useEffect } from "react";
import SongsList from "./Components/SongsList";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <SongsList />
      </div>
    </ChakraProvider>
  );
}

export default App;
