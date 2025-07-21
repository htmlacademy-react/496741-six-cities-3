import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FullOfferType, OfferRerucerType } from '../../types/offer.ts';
import {
  fetchCommentsAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  postCommentAction } from '../api-actions.ts';

const initialState: OfferRerucerType = {
  offer: null,
  offersNearby: [],
  comments: [],
  isOfferPageLoading: false,
  isCommentPosting: false,
  reviewRating: 0,
  reviewComment: '',
};

export const offerReducer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setOffer: (state, action: PayloadAction<FullOfferType>) => {
      state.offer = action.payload;
    },
    resetOfferData: (state) => {
      state.offer = null;
      state.comments = [];
      state.offersNearby = [];
    },
    setReviewRating: (state, action: PayloadAction<number>) => {
      state.reviewRating = action.payload;
    },
    setReviewComment: (state, action: PayloadAction<string>) => {
      state.reviewComment = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferPageLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferPageLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOfferPageLoading = false;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.isCommentPosting = true;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments = [ action.payload, ...state.comments ];
        state.isCommentPosting = false;
        state.reviewRating = 0;
        state.reviewComment = '';
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isCommentPosting = false;
      });
  }
});

export const { resetOfferData, setOffer, setReviewRating, setReviewComment } = offerReducer.actions;
