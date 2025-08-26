import "/src/app.css"

import MoviePage from "./pages/MoviesPage"
import Header from "./components/Header"
import MovieDetail from "./components/MovieDetail"
import Movies from "./components/Movies"
import Series from "./components/Series"


import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListCard from "./components/ListCard"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviePage />} />
        <Route path="*" element={<div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}><h2>Page not found</h2></div>} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="serie/:id" element={<MovieDetail />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


