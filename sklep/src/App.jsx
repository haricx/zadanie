import './App.css';
import z1 from './img/obraz.png';
import z2 from './img/obraz.png';
import z3 from './img/obraz.png';
import z4 from './img/obraz.png';
import Warzywo from './Warzywo';

const produkty = [
  {nr: 1, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z1},
  {nr: 2, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z2},
  {nr: 3, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z3},
  {nr: 4, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z4},
  {nr: 1, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z1},
  {nr: 2, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z2},
  {nr: 3, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z3},
  {nr: 4, nazwa: "obraz numer 1", opis: "Mazaj 1",  cena: 1000000, zdjecie: z4}
]

function App() {
  return (
    <div className="App">
          <main>
        <div className="container">
            {produkty.map((p) => (<Warzywo warzywo={p}/>))}
        </div>

      </main>
    </div>
  );
}

export default App;
