function temperatureGraph(xArray, yArray) {
  var ctx = document.getElementById('temperatureChart')
  var data = {
    labels: xArray,
    datasets: [
      {
        label: 'Temperature',
        pointBackgroundColor: "#ff2200",
        backgroundColor: "rgba(255, 198, 133, 0.6)",
        borderColor: "#ff6200",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: yArray
      }
    ]
  }
  chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10
          }
        }],
        xAxes: [{
          type: 'time',
          time: {
            unit: 'minute',
          },
          ticks: {
            min: Date.now() - (86400*1000),
            max: Date.now(),
            maxTicksLimit: xArray.length/15

          }
        }]
      },
      maintainAspectRatio: false,
      responsive: true
    }
  });
}