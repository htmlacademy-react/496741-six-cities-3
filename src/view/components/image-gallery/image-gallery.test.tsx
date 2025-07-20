import { render, screen } from '@testing-library/react';
import { makeFakeFullOffer } from '../../../utils/mocks';
import { withHistory, withStore } from '../../../utils/mock-component';
import ImageGallery from './image-gallery';

describe('Component: ImageGallery', () => {
  it('should render correct', () => {
    const fakeFullOffer = makeFakeFullOffer();
    const galleryContainerTestId = 'gallery-container';
    const galleryItemTestId = 'gallery-item';

    const { withStoreComponent } = withStore(
      <ImageGallery images={fakeFullOffer.images} />, {});

    render(withHistory(withStoreComponent));

    const galleryContainer = screen.getByTestId(galleryContainerTestId);
    const galleryItems = screen.getAllByTestId(galleryItemTestId);

    expect(galleryContainer).toBeInTheDocument();
    expect(galleryItems.length).toBe(fakeFullOffer.images.length);
  });
});
