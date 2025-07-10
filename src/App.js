import './App.css';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import Articles from './components/Articles/Articles';

function App() {
  const a = "Hello world"
  return (
    <div className="google-clone">
      <Navbar />
      <main className="main-content">
        <SearchBar coolVariable={a}/>
        <Articles />
      </main>
    </div>
  );
}

export default App;
