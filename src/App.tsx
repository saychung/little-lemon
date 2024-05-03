import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div style={{display: "flex", marginLeft: "276.5px", gap: '60px', marginRight: "276.5px", paddingTop: '10px', paddingBottom: '10px', justifySelf: "center", justifyContent: "center", fontFamily: 'Karla'}}><Header /><Nav/></div>
      <main style={{}}>
        <Main />
      </main>
    </>
  );
}

export default App;
