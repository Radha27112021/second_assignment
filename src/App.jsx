import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
