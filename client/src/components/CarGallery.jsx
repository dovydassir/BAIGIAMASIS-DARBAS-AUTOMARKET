import audiImage from "../pictures/Audi.jpg";
import bmwImage from "../pictures/BMW.jpg";
import mercedesImage from "../pictures/Mercedes-Benz.jpg";

const galleries = {
    Audi: [audiImage],
    BMW: [bmwImage],
    "Mercedes-Benz": [mercedesImage],
};

function CarGallery({ imageName}) {
    const photos = galleries[imageName?.trim()] || [];

    return (
        <div className="car-gallery">
            {photos.map((photo, index) => (
                <img key={photo} src={photo} alt={`${imageName}, nuotrauka ${index + 1}`} className="car-image" />
            ))}
        </div>
    );
}

export default CarGallery;