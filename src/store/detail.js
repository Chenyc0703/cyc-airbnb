import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name:'detailSlice',
  initialState:{
    roomList:{},
  },
  reducers:{
    changeRoomListAction(store,{payload}) {
      store.roomList = payload
    }
  }
})


export const { 
  changeRoomListAction
} = detailSlice.actions


export default detailSlice.reducer