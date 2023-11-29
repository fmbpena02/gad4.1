let chartCanvas = document.getElementById("side-chart-quarterly");
let eventQuarterlyChart;

// Export function to create the quarterly chart
export function initializeEventQuarterlyChart(chartData, chartTitle) {
    chartCanvas = document.getElementById("side-chart-quarterly");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    eventQuarterlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [
                {
                    label: "Events",
                    borderWidth: 0,
                    backgroundColor: "rgba(255,100,100, 0.9)",
                    borderColor: "rgba(255,100,100, 0.5)",
                    hoverBackgroundColor: "rgba(255,100,100, 0.4)",
                    hoverBorderWidth: 3,
                    borderRadius: 5,
                    data: [],
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Quarters",
                        font: {
                            family: "Nunito",
                            size: 15,
                            weight: 500,
                        },
                        padding: { top: 10, left: 0, right: 0, bottom: 0 },
                    },
                },
                y: {
                    beginAtZero: true,
                    display: true,
                    title: {
                        display: true,
                        text: "Count",
                        font: {
                            family: "Nunito",
                            size: 15,
                            weight: 500,
                        },
                        padding: { top: 0, left: 0, right: 0, bottom: 0 },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: "Quarterly",
                    font: {
                        family: "Poppins, sans-serif",
                        size: 15,
                        weight: 600,
                    },
                    padding: { top: 0, left: 0, right: 0, bottom: 10 },
                },
                legend: {
                    display: false,
                },
            },
        },
    });

    eventQuarterlyChart.data.datasets[0].data = chartData;
    eventQuarterlyChart.options.plugins.title.text = chartTitle;
    eventQuarterlyChart.update();
    console.log("Events QUARTERLY chart INITIALIZED!!!");
}

export function eventsQuarterly(chartData, chartTitle) {
    if (!chartData) {
        console.log("Events Yearly: Passed chart data is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("Events Yearly: Passed chart title is undefined");
        return;
    }
    if (!eventQuarterlyChart) {
        console.log("Events QUARTERLY chart not initialized!!!");
        return;
    }

    eventQuarterlyChart.data.datasets[0].data = chartData;
    eventQuarterlyChart.options.plugins.title.text = chartTitle;
    eventQuarterlyChart.update();
    console.log("Events QUARTERLY chart updated");
}
