import './App.css';

function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const indexer = index => {
        if (index % 2 === 0) {
            return 'duog'
        } else {
            return 'doge'
        };
    };


    return (
        <div className="App">
                <div className="container">
                    1 UZDUOTIS
                    {dogs.map((dog, i) => <div key={i} className = 'duog'>{dog}</div>)}
                </div>
                <div className="container">
                    2 UZDUOTIS
                    {dogs.map((dog, i) => <div key={i} className = 'doge'>{`${i+1} ${dog}`}</div>)}
                </div>
                <div className="container">
                    3 UZDUOTIS
                    {dogs.map((dog, i) => <div key={i} className = {indexer(i)}>{dog}</div>)}
                </div>
                <div className="container">
                    4 UZDUOTIS
                    {dogs.map((dog, i) => <div key={i} className = {dog[0] === dog[0].toUpperCase() ? 'non' : 'duog'}>{dog}</div>)}
                </div>
                <div className="container">
                    5 UZDUOTIS
                    {dogs.map((dog, i) => <div key={i} className = {dog.length > 6  ? 'zalia' : 'raudona'}>{dog.length}</div>)}
                </div>
        </div>
    );
}

export default App;
