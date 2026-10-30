import type { Allat } from "../Types/Allat.type"

export type AllatLista_props = {
    allatok:Allat[],
    eletkorNovelese: (id:number)=>void,
    allatTorlese: (id:number)=>void
}