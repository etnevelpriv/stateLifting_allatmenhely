import type { AllatLista_props } from "../../Models/Props/AllatLista.prop"
import type { Allat } from "../../Models/Types/Allat.type"

export const AllatLista = function(props:AllatLista_props) {
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>nev</th>
                    <th>kor</th>
                </tr>
            </thead>
            <tbody>
                {props.allatok.map((allat:Allat, index:number)=>(
                    <tr key={index}>
                        <td>{allat.id}</td>
                        <td>{allat.nev}</td>
                        <td>{allat.kor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}