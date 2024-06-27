export default function Daiktas({props}) {

    const seaPlaners = [
        {id: 1, type: 'man', name: 'Lina', color: 'blue'},
        {id: 2, type: 'car', name: 'Opel', color: 'red'},
        {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
        {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
        {id: 5, type: 'man', name: 'Tomas', color: 'green'},
        {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
        {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
        {id: 8, type: 'car', name: 'MB', color: 'blue'},
        {id: 9, type: 'car', name: 'ZIL', color: 'red'},
        {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
    ];
  
    const filtruotas = props === 'lyginiai' ? seaPlaners.filter(item => item.id % 2 === 0) : seaPlaners.filter(item => item.id % 2 !== 0);  
   
    return <>
        {filtruotas.map((item, i) => <div key={i} className = 'uzd2'>{`id: ${item.id}, type: ${item.type}, name: ${item.name}, color: ${item.color}`}</div>)}
    </>

}