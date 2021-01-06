function toCelsius(temp) {
    return (temp - 32) * (5/9)
}
//TODO This doesn't save preferences anymore
function temperatureGraphSetup(temps) {
    window.localStorage.setItem('celsius', 'false')
    let xArray = []
    temps.forEach(obs => xArray.push(new Date(obs.time)))
    let yArray = []
    temps.forEach(obs => yArray.push(obs.temperature))
    return temperatureGraph(xArray, yArray, "°F")
}

function humidityGraphSetup(humidity) {
    let xArray = []
    humidity.forEach(obs => xArray.push(new Date(obs.time)))
    let yArray = []
    humidity.forEach(obs => yArray.push(obs.humidity))
    return humidityGraph(xArray, yArray)
}