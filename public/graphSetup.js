function toCelsius(temp) {
    return (temp - 32) * (5/9)
}

function temperatureGraphSetup(temps) {
    window.localStorage.setItem('celsius', 'false')
    let xArray = []
    temps.forEach(obs => xArray.push(new Date(obs.time)))
    let yArray = []
    temps.forEach(obs => yArray.push(obs.temperature))
    tempChart = temperatureGraph(xArray, yArray)
    return tempChart
}

function temperatureGraphSetupCelsius(temps) {
    window.localStorage.setItem('celsius', 'true')
    let xArray = []
    temps.forEach(obs => xArray.push(new Date(obs.time)))
    let yArray = []
    temps.forEach(obs => yArray.push(toCelsius(obs.temperature)))
    tempChart = temperatureGraph(xArray, yArray)
    return tempChart
}

function humidityGraphSetup(humidity) {
    let xArray = []
    humidity.forEach(obs => xArray.push(new Date(obs.time)))
    let yArray = []
    humidity.forEach(obs => yArray.push(obs.humidity))
    humChart = humidityGraph(xArray, yArray)
    return humChart
}

