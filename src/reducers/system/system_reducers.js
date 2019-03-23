/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import { store } from "redux";
import { TOGGLE_SIDEMENU } from "../../actions/action_types";

const INITIAL_STATE = {
  sideMenuToggle: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SIDEMENU: {
      console.log(!state.sideMenuToggle)
      return {
        ...state,
        sideMenuToggle: !state.sideMenuToggle,
      }
    }
    default: {
      return state;
    }
  }
};
