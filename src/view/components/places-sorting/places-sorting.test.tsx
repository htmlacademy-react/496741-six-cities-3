import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlacesSorting from './places-sorting';
import * as hooks from '../../../hooks';
import { withStore } from '../../../utils/mock-component';
import { makeFakeState } from '../../../utils/mocks';
import { SortTypeOptions } from '../../../const';
import { changeSortType } from '../../../store/offers/offers-reducer';

describe('Component: PlacesSorting', () => {
  const mockState = makeFakeState();

  it('should dispatch changeSortType on new sort option click', async () => {
    const user = userEvent.setup();
    const mockDispatch = vi.fn();

    const currentSort = SortTypeOptions.Popular;
    const newSort = SortTypeOptions.TopRatedFirst;

    vi.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch);

    vi.spyOn(hooks, 'useAppSelector').mockImplementation((selector) =>
      selector({ ...mockState, OFFERS: { ...mockState.OFFERS, sortOption: currentSort } })
    );

    const { withStoreComponent } = withStore(<PlacesSorting />, mockState);
    render(withStoreComponent);

    const toggle = screen.getByText(currentSort);
    await user.click(toggle);

    const newSortOptionElement = screen.getByText(newSort);
    await user.click(newSortOptionElement);

    expect(mockDispatch).toHaveBeenCalledWith(changeSortType(newSort));
  });

  it('should NOT dispatch changeSortType if current sort is selected again', async () => {
    const user = userEvent.setup();
    const mockDispatch = vi.fn();

    const currentSort = SortTypeOptions.PriceHighToLow;

    vi.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch);
    vi.spyOn(hooks, 'useAppSelector').mockImplementation((selector) =>
      selector({ ...mockState, OFFERS: { ...mockState.OFFERS, sortOption: currentSort } })
    );

    const { withStoreComponent } = withStore(<PlacesSorting />, mockState);
    render(withStoreComponent);

    const toggle = screen.getByText(currentSort);
    await user.click(toggle);

    const menuOptions = screen.getAllByText(currentSort);
    const itemToClick = menuOptions.find((el) => el.tagName === 'LI');
    await user.click(itemToClick!);

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
