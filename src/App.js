import './App.css';
import { Switch, Route} from "react-router-dom"
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' Component={Home} />
      </Switch>
    </div>
  );
}

export default App;
