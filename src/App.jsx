import React from 'react'
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import Newsitems from "./Components/Newsitems";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Newsboard></Newsboard>
      <Newsitems></Newsitems>
    </div>
  )
}

export default App
