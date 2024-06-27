import Show from './Show'


export default function Read({rows, setDeleteData, setUpdateData, klientai, suma, addNotification, filtered}) {

    // const filterConditions = f => {
    //     if(f.value === 'visos') {
    //         return;
    //     } else if(f.value === 'turi') {
    //         return (.filter())
    //     } else {
    //         return;
    //     }


        return (
            <>
                <h1>BANKAS</h1>
                <div className='stats'>
                    <span className='klientuSk'>Klientų sk.: {klientai}</span>
                    <span className='bendraSuma'>Bendros lėšos: {suma}</span>
                </div>
                <div className='table'>
                    <div className='top-row'>
                        <div className='el name'>Vardas</div>
                        <div className='el name'>Pavardė</div>
                        <div className='el sask'>Sąskaitos Nr.</div>
                        <div className='el'>Suma, &euro;</div>
                        <div className='el trash'></div>
                        <div className='el edit'></div>
                    </div>
                    {rows.sort((a, b) => b.pavarde < a.pavarde ? 1 : (a.pavarde < b.pavarde) ? -1 : 0).filter(row => filtered.value === 'turi' ? row.suma > 0 : filtered.value === 'tuscios' ? row.suma === 0 : row).map((row, i) => <Show row={row} setDeleteData={setDeleteData} setUpdateData={setUpdateData} addNotification={addNotification} key={i}/>)}
                </div>
                <div className='bottom-border'></div>
            </>)
}