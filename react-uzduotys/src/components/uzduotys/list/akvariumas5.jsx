export default function Akvariumas5({masyvas, props}) {


    return <>
        {masyvas.filter(item => item.type === "fish").filter(item => (props === 'lyginis' ? item.id % 2 === 0 : item.id % 2 === 1)).map((item, i) => <div key={i} className = 'uzd5'>{`id: ${item.id}, type: ${item.type}, name: ${item.name}, color: ${item.color}`}</div>)}
    </>
}