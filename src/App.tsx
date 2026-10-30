import { useState } from "react";
import type { Allat } from "./Models/Types/Allat.type";
import { AllatLista } from "./Components/AllatLista/AllatLista";
import { AllatVezerlo } from "./Components/AllatVezerlo/AllatVezerlo";

export const App = function () {
  const [allatok, setAllatok] = useState<Allat[]>([
    {
      id: 0,
      nev: "Bodri",
      kor: 5
    },
    {
      id: 1,
      nev: "Cupcake",
      kor: 8
    },
    {
      id: 2,
      nev: "Gorlock, the destroyer of worlds",
      kor: 2
    }
  ]);

  const allatHozzaadasa = function (nev: string="Bloki", kor: number=6) {
    setAllatok((elozoAllatok) => {
      const allat: Allat = {
        id: (elozoAllatok.at(-1)?.id ?? -1) + 1,
        nev: nev,
        kor: kor
      }
      return [...elozoAllatok, allat]
    });
  };

  const eletkorNovelese = function (id: number) {
    setAllatok((elozoAllatok) =>
      elozoAllatok.map((allat) =>
        allat.id === id
          ? { ...allat, kor: allat.kor + 1 }
          : allat
      )
    );
  };

  const allatTorlese = function (id:number) {
    setAllatok((elozoAllatok)=>{
      return elozoAllatok.filter((allat) => allat.id != id)
    });
  };

  return (
    <>
      <AllatLista allatok={allatok} allatTorlese={allatTorlese} eletkorNovelese={eletkorNovelese}></AllatLista>
      <AllatVezerlo allatHozzaadasa={allatHozzaadasa}></AllatVezerlo>
    </>
  )
};