import { createSlice } from "@reduxjs/toolkit";

import { DarkTheme, LightTheme } from "@/theme";
import type { Theme } from "@/theme";


interface ThemeState {
    theme: "light" | "dark";
    style: Theme;
}

const themeSlice = createSlice({
	name: "theme",
	initialState: {
		theme: "light", 
		style: LightTheme, 
	} as ThemeState,
	reducers: {
		// payload = "light" or "dark"
		toggleTheme: (state, { type, payload }) => {
            if (payload == "light"){
                state.theme = "light";
                state.style = LightTheme;
                console.log("light")
            } else {
                state.theme = "dark";
                state.style = DarkTheme;
                console.log("dark")
            }
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
