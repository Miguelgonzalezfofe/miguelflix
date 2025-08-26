import { Ratio } from 'react-bootstrap';

export default function MovieVideoPlayer({ videoKey }) {
    if (!videoKey) {
        return <p className="text-white-50">No hay videos disponibles.</p>;
    }

    const videoUrl = `https://www.youtube.com/embed/${videoKey}?`;

    return (
        <Ratio aspectRatio="16x9">
            <iframe
                title="Reproductor de Video"
                src={videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
            ></iframe>
        </Ratio>
    );
}
