import audiImage from "../pictures/Audi.jpg";
import bmwImage from "../pictures/BMW.jpg";
import mercedesImage from "../pictures/Mercedes-Benz.jpg";

import audi1 from "../pictures/Audi1.jpg";
import audi2 from "../pictures/Audi2.jpg";
import audi3 from "../pictures/Audi3.jpg";
import audi4 from "../pictures/Audi4.jpg";
import audi5 from "../pictures/Audi5.jpg";

import bmw1 from "../pictures/BMW1.jpg";
import bmw2 from "../pictures/BMW2.jpg";
import bmw3 from "../pictures/BMW3.jpg";

import mercedes1 from "../pictures/Mercedes-Benz1.jpg";
import mercedes2 from "../pictures/Mercedes-Benz2.jpg";
import mercedes3 from "../pictures/Mercedes-Benz3.jpg";


const galleries = {
    Audi: [audiImage, audi1, audi2, audi3, audi4, audi5],
    BMW: [bmwImage, bmw1, bmw2, bmw3],
    "Mercedes-Benz": [mercedesImage, mercedes1, mercedes2, mercedes3],
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