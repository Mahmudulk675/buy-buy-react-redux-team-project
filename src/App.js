
import Contacts from './Components/Contacts/Contacts';
import Navbar from './Components/Navbar/Navbar';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="py-3 container">
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
