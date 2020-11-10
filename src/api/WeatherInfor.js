function getData(url) {
    return new Promise((resolve, reject) => {
        let result = {};
        fetch(url, { mode: 'cors' })
            // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=15.11667&lon=108.800003&appid=993b45ee4b3939f7e01752c938c35d0b&units=metric', { mode: 'cors' })
            // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=15.0&lon=108.666672&appid=993b45ee4b3939f7e01752c938c35d0b&units=metric', { mode: 'cors' })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response && response.cod === '404') {
                    reject(response.message);
                }
                const { wind, visibility, main, weather, name, sys } = { ...response };
                // const { temp, humidity, visibility, feels_like, weather } = { ...current }
                // console.log({ main, weather, wind, visibility, sys });
                result = { main, weather, wind, visibility, name, sys };
                console.log("Ok fine");
                resolve(result);
            })
        // .catch(error => {
        //     console.log("ERROR in WeatherInfor" + error);
        //     reject(error);
        // });
    })
    // console.log("hshdhasdfafd");
    // return result;
}




export default getData;