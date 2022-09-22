import { configureStore } from "@reduxjs/toolkit";

import homeReducer from './home'
import entireReducer from './entire'
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store