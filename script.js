const labels = ["January", "February", "March", "April", "May", "June"];
const predictionData = [65, 59, 80, 81, 56, 55];
const actualData = [28, 48, 40, 19, 86, 27];

const configSlider = document.getElementById('config-slider');
const configValue = document.getElementById('config-value');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

const aiModel = {
    isRunning: false,
    start: function() {
        if (!this.isRunning) {
            this.isRunning = true;
            console.log('AI model started');
            // Add logic to start AI model process here
        }
    },
    stop: function() {
        if (this.isRunning) {
            this.isRunning = false;
            console.log('AI model stopped');
            // Add logic to stop AI model process here
        }
    }
};

    // Get the canvas element and create a chart
    const ctx = document.getElementById('prediction-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'AI Model Predictions',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: predictionData,
                fill: true,
            }, {
                label: 'Actual Results',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: actualData,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    configSlider.addEventListener('input', () => {
        const thresholdValue = configSlider.value;
        configValue.textContent = `${thresholdValue}%`;
    });

    startButton.addEventListener('click', () => {
        aiModel.start();
    });
    
    // Function to handle the stop button click
    stopButton.addEventListener('click', () => {
        aiModel.stop();
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });