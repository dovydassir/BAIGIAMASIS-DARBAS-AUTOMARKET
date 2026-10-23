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

import fordImage from "../pictures/Ford.jpg";
import ford1 from "../pictures/Ford1.jpg";
import ford2 from "../pictures/Ford2.jpg";
import ford3 from "../pictures/Ford3.jpg";

import hondaImage from "../pictures/Honda.jpg";
import honda1 from "../pictures/Honda1.jpg";
import honda2 from "../pictures/Honda2.jpg";
import honda3 from "../pictures/Honda3.jpg";

import kiaImage from "../pictures/Kia.jpg";
import kia1 from "../pictures/Kia1.jpg";
import kia2 from "../pictures/Kia2.jpg";

import mitsubishiImage from "../pictures/Mitsubishi.jpg";
import mitsubishi1 from "../pictures/Mitsubishi1.jpg";
import mitsubishi2 from "../pictures/Mitsubishi2.jpg";
import mitsubishi3 from "../pictures/Mitsubishi3.jpg";
import mitsubishi4 from "../pictures/Mitsubishi4.jpg";

import peugeotImage from "../pictures/Peugeot.jpg";
import peugeot1 from "../pictures/Peugeot1.jpg";
import peugeot2 from "../pictures/Peugeot2.jpg";
import peugeot3 from "../pictures/Peugeot3.jpg";

import skodaImage from "../pictures/Skoda.jpg";
import skoda1 from "../pictures/Skoda1.jpg";
import skoda2 from "../pictures/Skoda2.jpg";
import skoda3 from "../pictures/Skoda3.jpg";

import toyotaImage from "../pictures/Toyota.jpg";
import toyota1 from "../pictures/Toyota1.jpg";
import toyota3 from "../pictures/Toyota3.jpg";

import volkswagenImage from "../pictures/Volkswagen.jpg";
import volkswagen1 from "../pictures/Volkswagen1.jpg";
import volkswagen2 from "../pictures/Volkswagen2.jpg";
import volkswagen3 from "../pictures/Volkswagen3.jpg";


const galleries = {
    Audi: [audiImage, audi1, audi2, audi3, audi4, audi5],
    BMW: [bmwImage, bmw1, bmw2, bmw3],
    "Mercedes-Benz": [mercedesImage, mercedes1, mercedes2, mercedes3],
    Ford: [fordImage, ford1, ford2, ford3],
    Honda: [hondaImage, honda1, honda2, honda3],
    Kia: [kiaImage, kia1, kia2],
    Mitsubishi: [mitsubishiImage, mitsubishi1, mitsubishi2, mitsubishi3, mitsubishi4],
    Peugeot: [peugeotImage, peugeot1, peugeot2, peugeot3],
    Skoda: [skodaImage, skoda1, skoda2, skoda3],
    Toyota: [toyotaImage, toyota1, toyota3],
    Volkswagen: [volkswagenImage, volkswagen1, volkswagen2, volkswagen3],
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