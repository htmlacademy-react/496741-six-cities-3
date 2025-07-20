import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferRerucerType } from '../../types/offer.ts';
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
};

export const offerReducer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    resetOfferData: (state) => {
      state.offer = null;
      state.comments = [];
      state.offersNearby = [];
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
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.isCommentPosting = false;
      });
  }
});

export const { resetOfferData } = offerReducer.actions;
