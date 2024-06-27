import './App.css';
import Duprops from './components/uzduotys/duprops';
import Labas from './components/uzduotys/labas';
import Propsas from './components/uzduotys/propsas';
import Trysprops from './components/uzduotys/trysprops';
import Zebrai from './components/uzduotys/zebrai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labas />
        <Propsas text = {"Betkoks tekstas cia."} />
        <Zebrai num = {1} />
        <Duprops h1 = {'Belekas cia.'} h2 = {'Cia tai isvis nezinau kas.'} />
        <Trysprops h1 ={'Kas cia per tekstas?'} h2 = {'Nieko cia nera.'} color = {'dimgray'} />
      </header>
    </div>
  );
}

export default App;
