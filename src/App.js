import './App.css';
import Forecast from './components/Forecast/Forecast';
import Tempinfo from '../src/components/Tempinfo/Tempinfo'
import Search from '../src/components/Search/Search'

function App() {
  return (
    <div>
      <Search/>
      <Tempinfo/>
      <Forecast/>
      
    </div>
  );
}

export default App;
