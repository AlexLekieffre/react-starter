
import './App.css';
import CV from './containers/CV';
import Team from './components/Molecules/team';
import Experience from './components/Molecules/experience';

function App() {
  return (
    <div className="App">

      <CV >

        <Team />
      </CV>

    </div>
  );
}

export default App;
