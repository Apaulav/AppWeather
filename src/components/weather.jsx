import './weather.css'
import { useState } from 'react'
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const apiWeather = {
    key: 'b73ce08ce5cc2d301f53497273cdf750',
    base: 'https://api.openweathermap.org/data/2.5/',
}

function Weather() {

    const [search, setSearch] = useState('')
    const [weather, setWeather] = useState({})
    const searchButton = () => {
        console.log('Pulsando el botón buscar')
        if (search !== '') {
            console.log(search)
            fetch(`${apiWeather.base}weather?q=${search}&units=metric&APPID=${apiWeather.key}`)
                .then(res => res.json())
                .then(result => { setWeather(result); console.log(result) })
        } else {
            alert('Introduce una ciudad')
        }

    }
    const getWeatherIcon = (weatherMain) => {
        switch (weatherMain) {
            case 'Clear':
                return <WiDaySunny size={64} />; // Sol
            case 'Clouds':
                return <WiCloud size={64} />; // Nublado
            case 'Rain':
                return <WiRain size={64} />; // Lluvia
            case 'Snow':
                return <WiSnow size={64} />; // Nieve
            case 'Thunderstorm':
                return <WiThunderstorm size={64} />; // Tormenta
            case 'Fog':
            case 'Mist':
                return <WiFog size={64} />; // Niebla
            default:
                return null;
        }
    }

    return (

        <div>
            {/* SEARCH INPUT */}
            <section className='sectionSearch'>
                <input type="text" placeholder='Buscar ciudad' onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchButton}>Buscar</button>
            </section>
            {/* LOCATION */}
            <p>{weather.name}</p>
            {/* WEATHER */}
            <p>{weather.main ? `${weather.main.temp}ºC` : ''} <span className='weatherIcon'>{weather.weather ? getWeatherIcon(weather.weather[0].main) : ''}</span></p>
            {/* SUN, WIND, CLOUD, RAIN */}
            <p></p>
        </div>
    )
}

export default Weather