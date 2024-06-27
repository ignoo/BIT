import './App.scss';
import {useState} from 'react';

function App() {

    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const[sqOrCirc, changer] = useState('shape circ');
    const[sqOrCirc2, changer2] = useState('shape circ');
    const[ranum, randomize] = useState(rand(5, 25));

    const replace = _ => {
        if(sqOrCirc === 'shape sq') {
            return changer('shape circ');
        } else {
            return changer('shape sq');
        } 
    }

    const replace2 = _ => {
        if(sqOrCirc2 === 'shape sq') {
            return changer2('shape circ');
        } else {
            return changer2('shape sq');
        } 
    }

    const generateNum = _ => randomize(rand(5, 25));

    const[num, setNum] = useState(0);

    const plus = _ => setNum(n => n + 1);
    const minus = _ => setNum(n => n - 3);

    const[squares4, setSquare4] = useState([])

    const addSquare4 = _ => {
        setSquare4(s => [...s, ''])
    }

    const[squares5, setSquare5] = useState([])

    const addSquare5 = spalva => {
        setSquare5(s => [...s, spalva])
    }

    const reset = _ => {
        setSquare5([])
    }



    return (
        <div className="App">
            <header className="App-header">
                <div className='container'>
                    <span>1 UZDUOTIS</span>
                    <span className={sqOrCirc}></span>
                    <button onClick={replace}>SPAUSK</button>
                </div>
                <div className='container'>
                    <span>2 UZDUOTIS</span>
                    <span className={sqOrCirc2}>{ranum}</span>
                    <div>
                        <button onClick={replace2}>CHANGE</button>
                        <button onClick={generateNum}>RANDOM</button>
                    </div>
                </div>
                <div className='container'>
                    <span>3 UZDUOTIS</span>
                    <span >{num}</span>
                    <div>
                        <button onClick={plus}>+</button>
                        <button onClick={minus}>-</button>
                    </div>
                </div>
                <div className='container'>
                    <span>4 UZDUOTIS</span>
                    <div className='squareCont'>
                        {squares4.map((square, i) => <div key={i} className="shape" style={{backgroundColor: 'blue'}}>{square}</div>)}
                    </div>
                    <div>
                        <button onClick={addSquare4}>add</button>
                    </div>
                </div>
                <div className='container'>
                    <span>5 UZDUOTIS</span>
                    <div className='squareCont'>
                        {squares5.map((square, i) => <div key={i} className="shape" style={{backgroundColor: square}}></div>)}
                    </div>
                    <div>
                        <button onClick={_=>addSquare5('red')}>add red</button>
                        <button onClick={_=>addSquare5('blue')}>add blue</button>
                        <button onClick={reset}>reset</button>
                    </div>
                </div>

            </header>
        </div>

    )

}


export default App;
