import type { AllatVezerlo_prop } from "../../Models/Props/AllatVezerlo.prop";

export const AllatVezerlo = function(props:AllatVezerlo_prop) {
    return (
        <>
        <button onClick={()=>{
            props.allatHozzaadasa()
        }}>Allat hozzaadasa</button>
        </>
    )
;}