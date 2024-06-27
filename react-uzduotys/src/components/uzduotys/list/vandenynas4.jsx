import Spalva4 from "./spalva4";
import Tipas4 from "./tipas4";
import Vardas4 from "./vardas4";

export default function Vandenynas4({masyvas}) {


    return <>
        <div className="container">
            <span className="pavadinimas">Surūšiuota pagal tipą</span>
            <Tipas4 masyvas = {masyvas}/>
        </div>
        <div className="container">
            <span className="pavadinimas">Surūšiuota pagal vardą</span>
            <Vardas4 masyvas = {masyvas}/>
        </div>
        <div className="container">
            <span className="pavadinimas">Surūšiuota pagal spalvą</span>
            <Spalva4 masyvas = {masyvas}/>
        </div>
    </>
}