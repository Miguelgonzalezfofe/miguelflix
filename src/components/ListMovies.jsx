import MovieCard from "./MovieCard";

function ListMovies ({movies}) {
    return (
        <div className="row">
            {movies.map(movie => (
                <div className="col" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    )
}

export default ListMovies;
