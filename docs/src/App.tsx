import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './app/page';
import Views from "./app/layout/views/page";
import Columns from "./app/layout/columns/page";
import Gutters from "./app/layout/gutters/page";
import Breakpoints from "./app/layout/breakpoints/page";
import Aligners from "./app/layout/aligners/page";
import Grids from "./app/layout/grids/page";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="layout" >
          <Route path="views" element={<Views />} />
          <Route path="columns" element={<Columns />} />
          <Route path="gutters" element={<Gutters />} />
          <Route path="breakpoints" element={<Breakpoints />} />
          <Route path="aligners" element={<Aligners />} />
          <Route path="grids" element={<Grids />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
