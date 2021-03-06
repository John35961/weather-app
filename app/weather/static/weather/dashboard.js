// Instanciating new canvas and new chart

let ctx = document.getElementById('weather_temp_forecast_chart').getContext('2d');
let weather_temp_forecast_chart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Temperature (°C)',
            data: chartCelTempForecast,
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0, 123, 255, 0.5)'
        }, {
            label: 'Feels like (°C)',
            data: chartCelFeelsLikeForecast,
            borderWidth: 1,
            type: 'line'
        }],
        labels: chartLabels
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontFamily: "'Krub', sans-serif", 
                    fontColor: "'rgb(131, 149, 167)'"
                },
                gridLines: {
                    color:'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                ticks: {
                    fontFamily: "'Krub', sans-serif",
                    fontColor: "'rgb(131, 149, 167)'",
                    beginAtZero: true
                },
                gridLines: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }]
        }, 
        legend: {
            labels: {
                fontFamily: "'Krub', sans-serif",
                fontColor: 'rgb(131, 149, 167)'
            }
        },
        tooltips: {
            titleFontFamily: "'Krub', sans-serif",
            bodyFontFamily: "'Krub', sans-serif",
        },
        maintainAspectRatio: false
    }
});


// For chart and tooltip, adapting font, background and border colors to selected CSS theme,
// when DOM is ready, or checkbox is clicked

adaptChartTheme = function() {
    if ($('#darkSwitch').is(':checked')) {
        weather_temp_forecast_chart.data.datasets[0].backgroundColor = 'rgba(222, 113, 25, 0.3)';
        weather_temp_forecast_chart.data.datasets[0].borderColor = 'rgba(222, 113, 25, 1)';
        weather_temp_forecast_chart.data.datasets[0].hoverBackgroundColor = 'rgba(222, 113, 25, 0.5)';
        weather_temp_forecast_chart.data.datasets[1].backgroundColor = 'rgba(0, 0, 0, 0)';
        weather_temp_forecast_chart.data.datasets[1].borderColor = 'rgba(206, 212, 218)';
        weather_temp_forecast_chart.options.legend.labels.fontColor = 'rgb(172, 170, 158)';
        weather_temp_forecast_chart.options.scales.xAxes[0].ticks.fontColor = 'rgb(172, 170, 158)';
        weather_temp_forecast_chart.options.scales.yAxes[0].ticks.fontColor = 'rgb(172, 170, 158)';
        weather_temp_forecast_chart.options.scales.yAxes[0].gridLines.color = 'rgba(72, 71, 67, 0.5)';
        weather_temp_forecast_chart.options.scales.xAxes[0].gridLines.color = 'rgba(72, 71, 67, 0.5)';
        weather_temp_forecast_chart.options.tooltips.titleFontColor = 'rgb(246, 244, 230)';
        weather_temp_forecast_chart.options.tooltips.bodyFontColor = 'rgb(246, 244, 230)';
        weather_temp_forecast_chart.options.tooltips.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        weather_temp_forecast_chart.update();
    } else {
        weather_temp_forecast_chart.data.datasets[0].backgroundColor = 'rgba(0, 123, 255, 0.3)';
        weather_temp_forecast_chart.data.datasets[0].borderColor = 'rgba(0, 123, 255, 1)';
        weather_temp_forecast_chart.data.datasets[0].hoverBackgroundColor = 'rgba(0, 123, 255, 0.5)';
        weather_temp_forecast_chart.data.datasets[1].backgroundColor = 'rgba(0, 0, 0, 0)';
        weather_temp_forecast_chart.data.datasets[1].borderColor = 'rgba(34, 34, 34)';
        weather_temp_forecast_chart.options.legend.labels.fontColor = 'rgb(131, 149, 167)';
        weather_temp_forecast_chart.options.scales.xAxes[0].ticks.fontColor = 'rgb(131, 149, 167)';
        weather_temp_forecast_chart.options.scales.yAxes[0].ticks.fontColor = 'rgb(131, 149, 167)';
        weather_temp_forecast_chart.options.scales.yAxes[0].gridLines.color = 'rgba(0, 0, 0, 0.1)';
        weather_temp_forecast_chart.options.scales.xAxes[0].gridLines.color = 'rgba(0, 0, 0, 0.1)';
        weather_temp_forecast_chart.options.tooltips.titleFontColor = 'rgb(255, 255, 255)';
        weather_temp_forecast_chart.options.tooltips.bodyFontColor = 'rgb(255, 255, 255)';
        weather_temp_forecast_chart.options.tooltips.backgroundColor = 'rgba(131, 149, 167, 0.85)';
        weather_temp_forecast_chart.update();
    };
};


// Adapting icons' background to selected CSS theme,
// when DOM is ready, or checkbox is clicked

adaptIconsTheme = function() {
    if ($('#darkSwitch').is(':checked')) {
        $(".icon-box").css('background-color', 'var(--white-alpha)');
    } else {
        $(".icon-box").css('background-color', 'var(--blue-alpha)');
    };
};


$(document).ready(function(){
    adaptChartTheme();
    adaptIconsTheme();
});

$('#darkSwitch').click(function() {
    adaptChartTheme();
    adaptIconsTheme();
});


// Conditional color formatting 
// for weatherUvIndex

if (weatherUvIndex <= 2) {
    $('#weather_uv_index').css('color', 'var(--green)');
} else if (weatherUvIndex >= 3 && weatherUvIndex <= 5) {
    $('#weather_uv_index').css('color', 'var(--yellow)');
} else if (weatherUvIndex >= 6 && weatherUvIndex <= 7) {
    $('#weather_uv_index').css('color', 'var(--orange)');
} else if (weatherUvIndex >= 8 && weatherUvIndex <= 10) {
    $('#weather_uv_index').css('color', 'var(--red)');
} else {
    $('#weather_uv_index').css('color', 'var(--purple)');
};


// Conditional color formatting 
// for weatherAirQualityIndex

if (weatherAirQualityIndex <= 50) {
    $('#weather_air_quality_index').css('color', 'var(--green)');
} else if (weatherAirQualityIndex >= 51 && weatherAirQualityIndex <= 100) {
    $('#weather_air_quality_index').css('color', 'var(--yellow)');
} else if (weatherAirQualityIndex  >= 101 && weatherAirQualityIndex <= 150) {
    $('#weather_air_quality_index').css('color', 'var(--orange)');
} else if (weatherAirQualityIndex  >= 151 && weatherAirQualityIndex <= 200) {
    $('#weather_air_quality_index').css('color', 'var(--red)');
} else if (weatherAirQualityIndex  >= 201 && weatherAirQualityIndex <= 300) {
    $('#weather_air_quality_index').css('color', 'var(--purple)');
} else {
    $('#weather_air_quality_index').css('color', 'var(--brown)');
};


// Conversion functions for temperature data

function toCelsius() {
    $('.weather_temp_current').html(weatherCelTempCurrent);
    $('.weather_temp_feels_like').html(weatherCelTempFeelsLike);
    $('.weather_temp_min').html(weatherCelTempMin);
    $('.weather_temp_max').html(weatherCelTempMax);
    $('.weather_temp_forecast_mean').html(WeatherCelTempForecastMean);
    $('.weather_temp_forecast_min').html(WeatherCelTempForecastMin);
    $('.weather_temp_forecast_max').html(WeatherCelTempForecastMax);
    $('.weather_wind_speed').html(weatherCelWindSpeed);
    $('.weather_cel_wind_speed_forecast').css('display', 'block');
    $('.weather_fah_wind_speed_forecast').css('display', 'none');
    $('.weather_temp_unit').html('°C');
    $('.weather_wind_speed_unit').html('m/s');
    weather_temp_forecast_chart.data.datasets[0].data = chartCelTempForecast;
    weather_temp_forecast_chart.data.datasets[1].data = chartCelFeelsLikeForecast;
    weather_temp_forecast_chart.data.datasets[0].label = 'Temperature (°C)';
    weather_temp_forecast_chart.data.datasets[1].label = 'Feels like (°C)';
    weather_temp_forecast_chart.update();
};

function toFahrenheit() {
    $('.weather_temp_current').html(weatherFahTempCurrent);
    $('.weather_temp_feels_like').html(weatherFahTempFeelsLike);
    $('.weather_temp_min').html(weatherFahTempMin);
    $('.weather_temp_max').html(weatherFahTempMax);
    $('.weather_temp_forecast_mean').html(WeatherFahTempForecastMean);
    $('.weather_temp_forecast_min').html(WeatherFahTempForecastMin);
    $('.weather_temp_forecast_max').html(WeatherFahTempForecastMax);
    $('.weather_wind_speed').html(weatherFahWindSpeed);
    $('.weather_cel_wind_speed_forecast').css('display', 'none');
    $('.weather_fah_wind_speed_forecast').css('display', 'block');
    $('.weather_temp_unit').html('°F');
    $('.weather_wind_speed_unit').html('mi/h');
    weather_temp_forecast_chart.data.datasets[0].data = chartFahTempForecast;
    weather_temp_forecast_chart.data.datasets[1].data = chartFahFeelsLikeForecast;
    weather_temp_forecast_chart.data.datasets[0].label = 'Temperature (°F)';
    weather_temp_forecast_chart.data.datasets[1].label = 'Feels like (°F)';
    weather_temp_forecast_chart.update();
};