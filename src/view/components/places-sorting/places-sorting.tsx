import { nanoid } from '@reduxjs/toolkit';
import { SortTypeOptions } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.ts';
import { changeSortType } from '../../../store/action.ts';
import { useState } from 'react';

function PlacesSorting(): JSX.Element {
  const sortingOption = useAppSelector((state) => state.sortOption);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
      >
        {sortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortTypeOptions).map((sort) => {
            const id = nanoid();
            return (
              <li
                key={`${sort}-${id}`}
                className={`places__option ${sort === sortingOption && 'places__option--active'}`}
                tabIndex={0}
                onClick={() => {
                  setIsOpen(false);
                  dispatch(changeSortType(sort));
                }}
              >
                {sort}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}

export default PlacesSorting;
