import { createSlice } from '@reduxjs/toolkit'
import { BANNEDLIST } from "../../app/shared/BANNEDLIST";

const initialState = {
    bannedListArray: BANNEDLIST
}

const bannedListSlice = createSlice({
    name: 'bannedList',
    initialState
})

export const bannedListReducer = bannedListSlice.reducer

export const selectBannedList = (state) => {
    return state.bannedList.bannedListArray
}

export const selectBannedCardByName = (name) => (state) => {
    return state.bannedList.bannedListArray.find(
        (item) => item.name === name
    )
}