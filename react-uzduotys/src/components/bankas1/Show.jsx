import trash from '../../img/trash-can.png'
import { useState } from 'react';


export default function Show({row, setDeleteData, setUpdateData, addNotification}) {

    const [lesos, setLesos] = useState(0);

    const handleChange = e => {
        setLesos(e.target.value)
    }

    const pridetiSubmit = row => {
        let naujaRow = { ...row};
        naujaRow.suma += parseInt(lesos);
        setUpdateData(naujaRow);
        setLesos(0);
    }

    const nuskaiciuotiSubmit = row => {
        if(row.suma < parseFloat(lesos)) {
            addNotification('destroy', 'Nepakanka lėšų.')
        } else {
            let naujaRow = { ...row};
            naujaRow.suma -= parseInt(lesos);
            setUpdateData(naujaRow);
            setLesos(0);
        }
    }

    const handleDelete = row => {
        if(row.suma > 0) {
            addNotification('destroy', 'Sąskaitos negalima ištrinti, nes joje yra lėšų.')
        } else {
            setDeleteData(row)
        }
    }

    return (
        <div className='row' key={row.id}>
            <div className='el name'>{row.vardas}</div>
            <div className='el name'>{row.pavarde}</div>
            <div className='el sask'>{row.nr}</div>
            <div className='el'>{row.suma}</div>
            <div className='el edit'>
                <input type="text" onChange={handleChange} value={lesos} />
                <div className='buttons'>
                    <button onClick={_ => pridetiSubmit(row)}>Pridėti lėšų</button>
                    <button onClick={_ => nuskaiciuotiSubmit(row)}>Nuskaičiuoti lėšas</button>
                </div>
            </div>
            <button className='el trash img'><img src={trash} alt="Trash can" onClick={_ => handleDelete(row)}/></button>
        </div>
    );
};