let chartCanvas = document.getElementById("side-chart-quarterly");
let attendanceQuarterlyChart;

let attendanceQuarterlyData = [];
let attendanceQuarterlyLabels = ["Q1", "Q2", "Q3", "Q4"];

// Export function to create the quarterly chart
export function initializeAttendanceQuarterlyChart(chartData, chartTitle) {
    chartCanvas = document.getElementById("side-chart-quarterly");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    attendanceQuarterlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: attendanceQuarterlyLabels,
            datasets: [
                {
                    label: "Attendance",
                    borderWidth: 0,
                    backgroundColor: "rgba(160, 106, 255, 0.9)",
                    borderColor: "rgba(160, 106, 255, 0.5)",
                    hoverBackgroundColor: "rgba(160, 106, 255, 0.4)",
                    hoverBorderWidth: 3,
                    borderRadius: 5,
                    data: attendanceQuarterlyData,
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

    attendanceQuarterlyChart.data.datasets[0].data = chartData;
    attendanceQuarterlyChart.options.plugins.title.text = chartTitle;
    attendanceQuarterlyChart.update();
    console.log("Attendance QUARTERLY chart INITIALIZED!!!");
}

export function attendanceQuarterly(chartData, chartTitle) {
    if (!chartData) {
        console.log("Attendance QUARTERLY: Passed chart data is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("Attendance QUARTERLY: Passed chart title is undefined");
        return;
    }
    if (!attendanceQuarterlyChart) {
        console.log("Attendance QUARTERLY chart not initialized!!!");
        return;
    }

    attendanceQuarterlyChart.data.datasets[0].data = chartData;
    attendanceQuarterlyChart.options.plugins.title.text = chartTitle;
    attendanceQuarterlyChart.update();
    console.log("Attendance QUARTERLY chart updated");
}
