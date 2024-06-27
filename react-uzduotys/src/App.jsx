import './App.scss';
import Delete from './components/bankas1/Delete';
import Notifications from './components/bankas1/Notifications';
import Read from './components/bankas1/Read';
// import { lsDestroy, lsRead, lsStore, lsUpdate } from './components/bankas1/lsManager';
import { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import Select from 'react-select';

const options = [
    { value: 'tuscios', label: 'Tuščios' },
    { value: 'turi', label: 'Turinčios lėšų' },
    { value: 'visos', label: 'Visos' }
  ]

const URL = "http://localhost:3001/bankas";

export default function App() {

    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }


    // Random saskaitos nr sukurimas
    const newAccount = _ => {
        let account = 'LT';
        for (let i = 0; i < 18; i++) {
            account += rand(1, 9);
        }
        return account;
    }

    // const KEY = 'rows'
    const [vardas, setVardas] = useState('');
    const [pavarde, setPavarde] = useState('');
    const [nr, setNr] = useState(newAccount());
    // const [suma, setSuma] = useState(0);
    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [destroyData, setDestroyData] = useState(null);
    const [updateData, setUpdateData] = useState(null);
    const [notifications, setNotifications] = useState([]);

    const [rows, setRows] = useState([]);

    const [bendraSuma, setBendraSuma] = useState(0);
    const [klientuSk, setKlientuSk] = useState(0);
    
    const [filtered, setFiltered] = useState({value: 'visos', label: 'Visos'});


    useEffect(_ => {
        axios.get(URL)
            .then(res => setRows(res.data))
            .catch(err => console.log(err));
    }, []);
    

    // useEffect(_ => {
    //     setRows(lsRead(KEY));
    // }, []);

    useEffect(_ => {
        if(null !== createData) {
            axios.post(URL, createData)
                .then(res => {
                    setRows(r => [{vardas: createData.vardas, pavarde: createData.pavarde, nr: createData.nr, suma: createData.suma, id: res.data.id}, ...r]);
                })
                .catch(err => console.log(err))
                setVardas('');
                setPavarde('');
            addNotification('create', 'Nauja sąskaita sukurta.');
        }
    }, [createData]);


    const handleSubmit = _ => {
        setNr(newAccount())
        if(vardas === '' || pavarde === '') {
            return;
        }
        setCreateData({vardas, pavarde, nr, suma: 0});
    }

    // useEffect(_ => {
    //     if(null === createData) {
    //         return;
    //     }
    //     const id = lsStore(KEY, createData);
    //     const createDataWithId = createData;
    //     createDataWithId['id'] = id;
    //     setRows(r => [...r, createDataWithId]);
    //     addNotification('create', 'Nauja sąskaita sukurta.');
        
    // }, [createData]);

    // useEffect(_ => {
    //     if(null === destroyData) {
    //         return;
    //     }
    //     lsDestroy(KEY, destroyData.id);
    //     setRows(rows => rows.filter(row => row.id !== destroyData.id));
    //     setDeleteData(null);
    //     addNotification('destroy', 'Sąskaita ištrinta.');
    // }, [destroyData])

    useEffect(_ => {
        if (null !== destroyData) {
            axios.delete(`${URL}/${destroyData.id}`)
                .then(res => {
                    setRows(r => r.filter(row => row.id !== destroyData.id));              
                })
                .catch(err => {
                console.log(err);
                });
                setDeleteData(null);
                addNotification('destroy', 'Sąskaita ištrinta.');
        }
        }, [destroyData]);



    // useEffect(_ => {
    //     if(null === updateData) {
    //         return;
    //     }
    //     lsUpdate(KEY, updateData.id, updateData);
    //     setRows(rows => rows.map(row => row.id === updateData.id ? { ...updateData, id: updateData.id } : row));
    //     addNotification('update', 'Operacija sėkminga.');
    // }, [updateData]);

    useEffect(_ => {
        if (null !== updateData) {
            axios.put(`${URL}/${updateData.id}`, updateData)
                .then(res => {
                    setRows(rows => rows.map(row => row.id === updateData.id ? { ...updateData, id: row.id } : row));
                })
                .catch(err => console.log(err));
                // setUpdateData(null);
            addNotification('update', 'Operacija sėkminga.');
        }
    }, [updateData]);



    useEffect(_ => {
        let klientai = 0;
        let bendra = 0;
        rows.forEach(row => {
            klientai++;
            bendra += row.suma;
        })
        setKlientuSk(klientai);
        setBendraSuma(bendra);
    }, [rows]);

    // const handleChange = e => {
    //     const fieldName = e.target.name;
    //     const value = e.target.value;
    //     setSaskaituArr(data => {
    //         data[fieldName] = value;
    //         return
    //     })
    // }
    
    const updateName = e => {
        setVardas(e.target.value);
    }

    const updateLastName = e => {
        setPavarde(e.target.value);
    }
    
    const addNotification = (type, text) => {
        const id = uuid();
        setNotifications(prevN => [{id, type, text}, ...prevN]);
        setTimeout(_ => {
            setNotifications(prevN => prevN.filter(n => n.id !== id));
        }, 4000);
    }

    return (
        <>
            <main>
                <Read rows={rows} setDeleteData={setDeleteData} setUpdateData={setUpdateData} klientai={klientuSk} suma={bendraSuma} addNotification={addNotification} filtered={filtered}/>
                <div className='filter'>
                    <Select options={options} placeholder='Sąskaitų filtras' onChange={setFiltered} className='select'/>
                </div>
                <div className='create'>
                    <div className='container'>
                        <h3>Nauja sąskaita</h3>
                        <input type="text" name='vardas' value={vardas} placeholder='Vardas' onChange={updateName} />
                        <input type="text" name='pavarde' value={pavarde} placeholder='Pavardė' onChange={updateLastName} />
                        <button onClick={handleSubmit}>Sukurti</button>
                    </div>
                </div>
            </main>
            <Delete deleteData={deleteData} setDeleteData={setDeleteData} setDestroyData={setDestroyData}/>
            <Notifications notifications={notifications} />
        </>
    );
}