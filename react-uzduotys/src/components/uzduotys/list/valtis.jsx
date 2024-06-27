export default function Valtis({masyvas}) {


    return <>
        {masyvas.map((item, i) => <div key={i} className = 'uzd3'>{item.type === 'man' ? `id: ${item.id}, type: ${item.type}, name: ${item.name}, color: ${item.color}` : null}</div>)}
    </>
}