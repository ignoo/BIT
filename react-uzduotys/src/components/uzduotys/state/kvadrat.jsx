import {useState} from 'react';


export default function Kvadrat() {

    const[number, setNumber] = useState(0)

    const addOne = _ => setNumber(n => n + 1);

    return <>
        <div className='nom'>{number}</div>
        <button className='plus' onClick={addOne}>+</button>
    </>
}