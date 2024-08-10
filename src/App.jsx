import './App.css'
import Weather from './components/weather.jsx'

function App() {
  return (
    <>
      {/* HEADER */}
      <header className='header'>
        <h1>Weather App</h1>
      </header>
      {/* MAIN */}
      <main>
        <Weather />
      </main>
      {/* FOOTER */}
      <footer className='footer'>
        <p>Creado por Paula Villegas Castro - 2024</p>
      </footer>

    </>
  )
}

export default App
