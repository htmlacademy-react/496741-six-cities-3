import { render, screen } from '@testing-library/react';
import ReviewsItem from './reviews-item';
import { makeFakeComment } from '../../../utils/mocks';
import { getFormattedDate } from '../../../utils/utils';

describe('Component: ReviewsItem', () => {
  it('should render review correctly', () => {
    const mockReview = makeFakeComment();
    const altText = /Reviews avatar/i;
    const formattedDate = getFormattedDate(mockReview.date);

    render(<ReviewsItem review={mockReview} />);

    expect(screen.getByText(mockReview.user.name)).toBeInTheDocument();
    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
    const avatar = screen.getByAltText(altText);
    expect(avatar).toBeInTheDocument();

    const timeElement = screen.getByText(formattedDate);
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.closest('time')).toHaveAttribute('dateTime', mockReview.date);
    const stars = screen.getByText('Rating').previousSibling as HTMLSpanElement;
    const expectedWidth = `${(mockReview.rating / 5) * 100}%`;
    expect(stars).toHaveStyle({ width: expectedWidth });
  });
});
