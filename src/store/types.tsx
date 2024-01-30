

export interface MenuListItem {
    key: string;
    path: string;
    name: string; // 中文名称
}


export interface TabItemType {
    name:string | undefined,
    path:string,
    active:string
}