import { nanoid } from '@reduxjs/toolkit';

type ImageGalleryProps = {
  images: string[];
}

function ImageGallery({images}: ImageGalleryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => {
          const id = nanoid();
          return (
            <div className="offer__image-wrapper" key={`${image}-${id}`}>
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
