import React from 'react'
import Navbar from "./Components/navbar";
import Newsboard from "./Components/newsboard";
import Newsitems from "./Components/newsitems";

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
