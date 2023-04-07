import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
// import { ballotReducer } from '../features/ballot/ballotSlice'
import { bannedListReducer } from '../features/bannedlist/bannedListSlice'
// import { loginReducer } from '../features/login/LoginSlice'
// import { searchReducer } from '../features/search/SearchSlice'
// import { votingCardReducer } from '../features/votingcards/votingCardSlice'

export const store = configureStore({
    reducer: {
        // ballot: ballotReducer,
        bannedList: bannedListReducer,
        // login: loginReducer,
        // search: searchReducer,
        // votingCard: votingCardReducer
    },
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat([logger])
})