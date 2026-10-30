import { useState } from "react";
import type { Allat } from "./Models/Types/Allat.type";

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

  const allatHozzaadasa = function (nev: string, kor: number) {
    setAllatok((elozoAllatok) => {
      const allat: Allat = {
        id: (elozoAllatok.at(-1)?.id ?? -1) + 1,
        nev: nev,
        kor: kor
      }
      return [...elozoAllatok, allat]
    });
  };

  allatHozzaadasa("Bloki", 12)
  return (
    <>
      <p>{allatok[2].nev}</p>
    </>
  )
};