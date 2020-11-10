import React from 'react';
import './ForeCast.css';

// function convertCtoF(value) {
//     return Math.round((value * 1.8) + 32);
// }
// function convertFtoC(value) {
//     return Math.round((value - 32) * 5 / 9);
// }

const ForeCast = props => {
    const { main, weather, wind, visibility, name, sys } = { ...props.data };
    const handleMesureChange = props.onChange;
    const check = props.check;
    // let unix = 1604875601;
    // let date = new Date(unix * 1000);
    // console.log(date)
    return (
        <div className='main-card'>
            <h1>{name}, {sys.country}</h1>
            <div className='temp-container'>
                <img alt='icon' src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
                <h1 className='temp'>{Math.round(main.temp)}<sup>{check ? '°F' : '°C'}</sup></h1>
                <div className='switch-btn'>
                    <label className="switch">
                        <input type="checkbox" onChange={handleMesureChange} />
                        <span className="slider round"></span>
                    </label>
                    <h4 style={{ display: 'inline' }}> °F</h4>
                </div>
            </div>
            <h2>{weather[0].description}</h2>
            <div>
                <p>Feels like {Math.round(main.feels_like)} {check ? '°F' : '°C'}</p>
                <p>Humidity {main.humidity}%</p>
                <p>Visibility {visibility} meter</p>
                <p>Wind {wind.speed} m/s</p>
            </div>
        </div>
    );
};

ForeCast.propTypes = {

};

export default ForeCast;