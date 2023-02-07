import { createSelector } from '@reduxjs/toolkit';

export const usersSelector = (state) => state.users;

export const remainSelector = createSelector(usersSelector);
