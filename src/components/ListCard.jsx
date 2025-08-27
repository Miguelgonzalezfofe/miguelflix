import GalleryCard from "./GalleryCard";

function ListCard({ props, count }) {

    return (
        <>
            <h2 className="mb-4">Populares ahora</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mb-4" id="movie-cards-container">
                {props.slice(0, count).map(prop => (
                    <div className="col" key={prop.id}>
                        <GalleryCard props={prop} />
                    </div>
                ))}
            </div>
        </>

    )
}

export default ListCard;
