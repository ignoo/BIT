export default function Tipas4({masyvas}) {


    return <>
        {masyvas.sort((a, b) => a.type < b.type ? -1 : 1).map((item, i) => <div key={i} className = 'uzd4'>{`id: ${item.id}, type: ${item.type}, name: ${item.name}, color: ${item.color}`}</div>)}
    </>
}