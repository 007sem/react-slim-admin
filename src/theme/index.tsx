export interface Theme {
    textColor: string
    descColor: string
    rColor: string
    bgc: string
    bgc2: string
    bgc3: string
    bgc4: string
    borderColor: string


    primary: string
    second:  string
    third: string
}

// TODO 完善 antd theme & 主色调


export const DarkTheme: Theme = {
    primary: "#7743DB",
    second:  "#EA1179",
    third: "#944E63",

    textColor: '#fff',
    descColor: '#888',
    rColor: '#181818',
    bgc: "#181818",
    bgc2: "#222",
    bgc3: "#333",
    bgc4: "#555",
    borderColor: "#888",
}




export const LightTheme: Theme = {

    primary: "#6499E9",
    second:  "#FF6868",
    third: "#FFBB64",


    textColor: '#181818',
    descColor: '#888',
    rColor: '#fff',
    bgc: "#ffffff",
    bgc2: "#f6f6f6",
    bgc3: "#eee",
    bgc4: "#ddd",
    borderColor: "#e8e8e8"
}