import './App.css';
import getData from './api/WeatherInfor';
import { useState } from 'react';
import ForeCast from './components/ForeCast';
// import background from './assets/images/background.jpg';

function App() {
  const [foreCast, setForeCast] = useState(null);
  const [query, setQuery] = useState('');
  const [fahrenheit, setFahrenheit] = useState(false);
  // const [error, setError] = useState(false);

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function getDataByUnit(check) {
    getData(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=993b45ee4b3939f7e01752c938c35d0b&units=${check ? 'imperial' : 'metric'}`)
      .then(dt => {
        setForeCast(dt);
        console.log("DT: " + dt);
      })
      .catch(error => {
        alert("ER: " + error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getDataByUnit(fahrenheit);
  }

  function handleMesureChange(e) {
    console.log(fahrenheit);
    setFahrenheit(e.target.checked);
    console.log(fahrenheit);
    getDataByUnit(e.target.checked);
  }

  return (
    <div className="App">
      <header className='header'>
        <h1 className='brand'>Weather Forecast</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter the city' value={query} onChange={handleQueryChange}></input>
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          foreCast && <ForeCast check={fahrenheit} onChange={handleMesureChange} data={foreCast} />
        }
      </main>
    </div>
  );
}

export default App;
