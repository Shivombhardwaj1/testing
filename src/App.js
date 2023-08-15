import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login,HomePage} from "./components";

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path="/" element={<Login />} />
 <Route exact path="/Homepage" element={<HomePage />} />


 </Routes>
 </BrowserRouter>
  );
}

export default App;
