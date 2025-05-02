async function submitUserData() {
    const button = document.querySelector('.submit-button');
    const originalText = button.innerHTML;
    
    try {
        button.innerHTML = '<div class="loader"></div>';
        button.disabled = true;

        const location = document.getElementById("userLocation").value.trim();
        const event = document.getElementById("userEvent").value.trim();

        if (!location) {
            alert("Location cannot be empty. Please enter a valid district name.");
            return;
        }

        if (!event) {
            alert("Event description cannot be empty. Please provide details about the event.");
            return;
        }

        const mockData = getMockData();

        document.getElementById("predictionText").innerText = mockData.prediction;
        document.getElementById("results").style.display = "block";
        document.getElementById("feedback").style.display = "block";

        renderCharts(mockData);
    } catch (error) {
        alert('Failed to fetch prediction data. Please try again later.');
        console.error(error);
    } finally {
        button.innerHTML = originalText;
        button.disabled = false;
    }
}

// add dataset api here //
function getMockData() {
    return {
        prediction: "Based on the provided data, the predicted energy consumption is 120 kWh.",
        weather: {
            hours: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
            temperatures: [15, 14, 14, 13, 13, 12, 12, 13, 14, 16, 18, 20, 22, 23, 24, 24, 23, 22, 20, 18, 17, 16, 15, 15],
            current: { temp: 22, humidity: 60, wind: 10 }
        },
        energy_mix: {
            labels: ["Solar", "Wind", "Hydro", "Thermal"],
            values: [25, 35, 20, 20]
        },
        usage_trend: {
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            values: [100, 120, 130, 140, 150, 160, 170]
        },
        cop: 3.5
    };
}

function renderCharts(data) {
    renderWeatherChart(data.weather);
    renderEnergyPie(data.energy_mix);
    renderUsageTrend(data.usage_trend);
    renderEfficiencyGauge(data.cop);
}

function renderWeatherChart(weatherData) {
    const ctx = document.getElementById('weatherChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(108, 178, 235, 0.3)');
    gradient.addColorStop(1, 'rgba(108, 178, 235, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: weatherData.hours,
            datasets: [{
                label: 'Temperature (°C)',
                data: weatherData.temperatures,
                borderColor: 'rgba(108, 178, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                backgroundColor: gradient,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    titleColor: '#f0f0f0',
                    bodyColor: '#d0d0d0',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                }
            }
        }
    });

    document.getElementById('currentTemp').textContent = `${weatherData.current.temp}°C`;
    document.getElementById('humidity').textContent = `${weatherData.current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${weatherData.current.wind} km/h`;
}

function renderEnergyPie(energyData) {
    const ctx = document.getElementById('energyPieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: energyData.labels.map((label, i) => `${label} ${energyData.values[i]}%`),
            datasets: [{
                data: energyData.values,
                backgroundColor: ['#FFD700', '#00BFFF', '#32CD32', '#FF6347'],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (ctx) => `Contribution: ${ctx.raw}% of total load`
                    }
                }
            }
        }
    });
}

function renderUsageTrend(trendData) {
    const ctx = document.getElementById('usageTrendChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: trendData.days,
            datasets: [{
                label: 'Power Usage (kWh)',
                data: trendData.values,
                backgroundColor: 'rgba(108, 178, 235, 0.7)',
                borderColor: 'rgba(108, 178, 235, 1)',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { 
                    grid: { display: false },
                    ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: 'rgba(255, 255, 255, 0.7)' }
                }
            },
            plugins: {
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    bodyColor: '#d0d0d0'
                }
            }
        }
    });
}

function renderEfficiencyGauge(copValue) {
    const ctx = document.getElementById('efficiencyGauge').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [copValue, 5 - copValue],
                backgroundColor: ['#7DE893', 'rgba(255, 255, 255, 0.1)'],
                borderWidth: 0
            }]
        },
        options: {
            circumference: 270,
            rotation: 225,
            cutout: '80%',
            plugins: {
                tooltip: { enabled: false }
            }
        }
    });
    document.getElementById('copValue').textContent = copValue.toFixed(1);
}

async function submitFeedback() {
    const button = document.querySelector('#feedback .submit-button');
    const originalText = button.innerHTML;
    
    try {
        button.innerHTML = '<div class="loader"></div>';
        button.disabled = true;

        const accuracy = document.getElementById('accuracy').value;
        const correction = document.getElementById('correctPrediction').value;

        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ accuracy, correction })
        });

        if (response.ok) {
            alert('Feedback submitted successfully!');
        } else {
            throw new Error('Failed to submit feedback');
        }
    } catch (error) {
        alert('Failed to submit feedback. Please try again later.');
        console.error(error);
    } finally {
        button.innerHTML = originalText;
        button.disabled = false;
    }
}
