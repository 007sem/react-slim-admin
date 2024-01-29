import type { MenuListItem } from "@/store";


export function setTitle(name: string){
    let title: string = document.title.split(' | ')[0]
    
    document.title = title + ' | ' + name
}


export function PathFindName (list: MenuListItem[],path: string): string{

    let res = ''
    list.forEach(item=>{
        if(item.path == path) res = item.name
    })
    return res
}