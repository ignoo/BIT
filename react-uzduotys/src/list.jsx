import './App.scss';
import Bala from './components/uzduotys/list/bala';
import Jura from './components/uzduotys/list/jura';
import Pasaulis5 from './components/uzduotys/list/pasaulis5';
import Tvenkinys from './components/uzduotys/list/tvenkinys';
import Vandenynas4 from './components/uzduotys/list/vandenynas4';

const seaPlaners = [
  {id: 1, type: 'man', name: 'Lina', color: 'blue'},
  {id: 2, type: 'car', name: 'Opel', color: 'red'},
  {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
  {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
  {id: 5, type: 'man', name: 'Tomas', color: 'green'},
  {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
  {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
  {id: 8, type: 'car', name: 'MB', color: 'blue'},
  {id: 9, type: 'car', name: 'ZIL', color: 'red'},
  {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="uzduotis1">
          <span>1 UZDUOTIS</span>
          <Bala />
        </div>
        <div className="uzduotis2">
          <span>2 UZDUOTIS</span>
          <Tvenkinys />
        </div>
        <div className="uzduotis3">
          <span>3 UZDUOTIS</span>
          <Jura masyvas = {seaPlaners}/>
        </div>
        <div className="uzduotis4">
          <span>4 UZDUOTIS</span>
          <Vandenynas4 masyvas = {seaPlaners}/>
        </div>
        <div className="uzduotis5">
          <span>5 UZDUOTIS</span>
          <Pasaulis5 masyvas = {seaPlaners}/>
        </div>
      </header>
    </div>
  );
}

export default App;
