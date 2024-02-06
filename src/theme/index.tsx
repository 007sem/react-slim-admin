export interface Theme {
    textColor: string
    descColor: string
    rColor: string
    bgc: string
    bgc2: string
    bgc3: string
    bgc4: string
    borderColor: string
}


export const DarkTheme: Theme = {
    textColor: '#fff',
    descColor: '#888',
    rColor: '#181818',
    bgc: "#181818",
    bgc2: "#222",
    bgc3: "#333",
    bgc4: "#555",
    borderColor: "#e8e8e8"
}
export const LightTheme: Theme = {
    textColor: '#181818',
    descColor: '#888',
    rColor: '#fff',
    bgc: "#fff",
    bgc2: "#f6f6f6",
    bgc3: "#eee",
    bgc4: "#ddd",
    borderColor: "#e8e8e8"
}