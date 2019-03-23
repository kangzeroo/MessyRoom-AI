/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import { TOGGLE_SIDEMENU } from "../action_types";

export const toggleSideMenu = () => dispatch => {
  return dispatch({
    type: TOGGLE_SIDEMENU,
  });
};
