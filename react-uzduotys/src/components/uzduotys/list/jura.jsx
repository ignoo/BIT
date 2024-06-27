import Laivas from "./laivas";
import Sala from "./sala";
import Valtis from "./valtis";

export default function Jura({masyvas}) {


    return <>
        <div className="container">
            <Valtis masyvas = {masyvas}/>
        </div>
        <div className="container">
            <Laivas masyvas = {masyvas}/>
        </div>
        <div className="container">
            <Sala masyvas = {masyvas}/>
        </div>
        <div className="container">
            {masyvas.map((item, i) => <div key={i} className = 'uzd3'>{item.type === 'fish' ? `id: ${item.id}, type: ${item.type}, name: ${item.name}, color: ${item.color}` : null}</div>)}
        </div>      
    </>
}