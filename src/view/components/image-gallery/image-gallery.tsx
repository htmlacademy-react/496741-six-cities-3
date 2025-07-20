import { nanoid } from '@reduxjs/toolkit';
import { MAX_IMAGES } from '../../../const';

type ImageGalleryProps = {
  images: string[];
}

function ImageGallery({images}: ImageGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container" data-testid="gallery-container">
      <div className="offer__gallery">
        {images.slice(0, MAX_IMAGES).map((image) => {
          const id = nanoid();
          return (
            <div className="offer__image-wrapper" key={`${image}-${id}`} data-testid="gallery-item">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
