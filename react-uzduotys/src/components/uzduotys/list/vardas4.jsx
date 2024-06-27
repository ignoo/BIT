export default function Vardas4({masyvas}) {


    return <>
        {masyvas.sort((a, b) => a.name < b.name ? -1 : 1).map((item, i) => <div key={i} className = 'uzd4'>{`id: ${item.id}, type: ${item.type}, name: ${item.name}, color: ${item.color}`}</div>)}
    </>
}