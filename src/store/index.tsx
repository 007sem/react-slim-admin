import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu";



export const store = configureStore({
	reducer: {
        menu: menuReducer,
    },
});


export * from "./types"

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
