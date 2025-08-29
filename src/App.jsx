import "./App.css"

import MoviePage from "./pages/MoviesPage"
import Header from "./components/Header"
import MovieDetail from "./components/MovieDetail"
import SerieDetail from "./components/SerieDetail"
import Movies from "./components/Movies"
import Series from "./components/Series"
import Genero from "./components/Genero"


import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="*" element={<div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}><h2>Page not found</h2></div>} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="tv/:id" element={<SerieDetail />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path=":type/genero/:id" element={<Genero />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App


