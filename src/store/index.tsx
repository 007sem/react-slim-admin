import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu";
import tabSlice from "./Tab"



export const store = configureStore({
	reducer: {
        menu: menuReducer,
        tab: tabSlice
    },
});


export * from "./types"

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
