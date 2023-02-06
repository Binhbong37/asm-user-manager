import { createSelector } from '@reduxjs/toolkit';

export const usersSelector = (state) => state.usersList.users;

export const remainSelector = createSelector(usersSelector);
