import MovieCard from "./MovieCard";

function ListCard({ props }) {
    return (
        <>
            <h2 className="mb-4">Populares ahora</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4" id="movie-cards-container">
                {props.map(prop => (
                    <div className="col" key={prop.id}>
                        <MovieCard movie={prop} />
                    </div>
                ))}
            </div>
        </>

    )
}

export default ListCard;
