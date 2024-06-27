import './App.scss';
import {useState} from 'react';
import Kvadrat from './components/uzduotys/state/kvadrat';



function App() {


    const[azuolai, setAzuolai] = useState([]);
    const[berzai, setBerzai] = useState([]);
    const[uosiai, setUosiai] = useState([]);

    const addAzuol = _ => setAzuolai(a => [...a, 'azuolas']);
    const addBerz = _ => setBerzai(b => [...b, 'berzas']);
    const addUos = _ => setUosiai(u => [...u, 'uosis']);

    const[kvadratai, setKvadratai] = useState([]);
    const addKvadrat = _ => setKvadratai(kv => [...kv, 'kvadrat'])

    const[num3, setNum3] = useState(0);
    const addNum3 = _ => setNum3(num => num + 1);
    

    return (
        <div className='whole'>
            <div className='title'>1 UŽDUOTIS</div>
            <div className='uzd1'>
                <div className='container'>
                    <div className='medis'>
                        {azuolai.map((tree, i) => <div key={i} className={tree}></div>)}
                    </div>
                    <button onClick={addAzuol}>ąžuolas</button>
                </div>
                <div className='container'>
                    <div className='medis'>
                        {berzai.map((tree, i) => <div key={i} className={tree}></div>)}
                    </div>
                    <button onClick={addBerz}>beržas</button>
                </div>
                <div className='container'>
                    <div className='medis'>
                        {uosiai.map((tree, i) => <div key={i} className={tree}></div>)}
                    </div>
                    <button onClick={addUos}>uosis</button>
                </div>
            </div>
            <div className='title'>2 UŽDUOTIS</div>
            <div className='uzd2'>
                <div className='container2'>
                    {kvadratai.map((kv, i) => <div key={i} className={kv}><Kvadrat/></div>)}
                </div>
                <button onClick={addKvadrat}>pridėti</button>
            </div>
            <div className='title'>3 UŽDUOTIS</div>
            <div className='uzd3'>
                <h2 className='num3'>{num3}</h2>
                <button onClick={addNum3}>+</button>
            </div>
        </div>

)}

export default App;