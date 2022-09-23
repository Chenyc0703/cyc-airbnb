import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main"
import homeReducer from './home'
import entireReducer from './entire'
import detailReducer from './detail'
const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireReducer,
    detail:detailReducer
  }
})

export default store