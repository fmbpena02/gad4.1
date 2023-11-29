let monthlyChartCanvas = document.getElementById("main-chart");
let eventMonthlyChart;

export function initializeEventMonthlyChart(
    chartData,
    chartLabels,
    chartTitle
) {
    monthlyChartCanvas = document.getElementById("main-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!monthlyChartCanvas) {
        return;
    }

    eventMonthlyChart = new Chart(monthlyChartCanvas, {
        type: "bar",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Events",
                    backgroundColor: "rgba(255,204,79, 0.9)",
                    borderWidth: 0,
                    borderColor: "rgba(255,204,79, 0.5)",
                    hoverBackgroundColor: "rgba(255,204,79, 0.4)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: [],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: "Months",
                        font: {
                            family: "Nunito",
                            size: 18,
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
                        text: "Event Count",
                        font: {
                            family: "Nunito",
                            size: 18,
                            weight: 500,
                        },
                        padding: { top: 0, left: 0, right: 0, bottom: 0 },
                    },
                },
            },
            layout: {
                padding: 20,
            },
            plugins: {
                title: {
                    display: true,
                    text: "Monthly",
                    font: {
                        family: "Nunito",
                        size: 20,
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

    eventMonthlyChart.data.datasets[0].data = chartData;
    eventMonthlyChart.data.labels = chartLabels;
    eventMonthlyChart.options.plugins.title.text = chartTitle;
    eventMonthlyChart.update();
    console.log("Events MONTHLY chart INITIALIZED!!!");
}

// Export function to create the Events main chart
export function eventsMonthly(chartData, chartLabels, chartTitle) {
    if (!chartData) {
        console.log("Events Monthly: Passed chart data is undefined");
        return;
    }
    if (!chartLabels) {
        console.log("Events Monthly: Passed chart labels is undefined");
        return;
    }
    if (!eventMonthlyChart) {
        console.log("Events MONTHLY chart not initialized!!!");
        return;
    }

    eventMonthlyChart.data.datasets[0].data = chartData;
    eventMonthlyChart.data.labels = chartLabels;
    eventMonthlyChart.options.plugins.title.text = chartTitle;
    eventMonthlyChart.update();
    console.log("Events MONTHLY chart updated");
}
