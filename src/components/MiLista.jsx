import { useState, useEffect } from "react";
import ListCard from "./ListCard";
import { getLike } from "../utils/app";
export default function MiLista() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(getLike());
    }, []);

    return (
        <div className="container mt-5 pt-5">
            <h2>Mi Lista</h2>
            <p>Aquí puedes ver tus películas y series guardadas.</p>
            <ListCard props={movies} count={5} path="movie" />
        </div>
    );
}
