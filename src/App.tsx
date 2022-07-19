import React, { useEffect } from "react";

import "./App.css";
import SongPlayer from "./Components/SongPlayer";
import SongsList from "./Components/SongsList";

function App() {
  return (
    <div className="App">
      <SongsList />
    </div>
  );
}

export default App;
