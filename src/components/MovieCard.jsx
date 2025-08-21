function MovieCard({ movie }) {
    let { title, poster_path } = movie
    return (
        <div className="card p-2">
            <h2 className=" fs-6 text-center">{title}</h2>
            <div className="text-center">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="card-img-top" style={{ width: '180px' }} />
            </div>
        </div>
    )
}
export default MovieCard