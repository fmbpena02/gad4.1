let chartCanvas = document.getElementById("yearly-chart");
let attendanceYearlyChart;

let AttendanceYearlyData = [];
let AttendanceYearlyLabels = [];

export function initializeAttendanceYearlyChart(
    chartData,
    chartLabels,
    chartTitle
) {
    chartCanvas = document.getElementById("yearly-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    attendanceYearlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: AttendanceYearlyLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(96, 59, 248, 0.9)",
                    borderWidth: 0,
                    borderColor: "rgba(96, 59, 248, 0.5)",
                    hoverBackgroundColor: "rgba(96, 59, 248, 0.4)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: AttendanceYearlyData,
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
                        padding: { top: 0, left: 0, right: 0, bottom: 0 },
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
                            size: 18,
                            weight: 500,
                        },
                        padding: { top: 0, left: 0, right: 0, bottom: 0 },
                    },
                },
            },

            layout: {
                padding: { top: 10, left: 10, right: 20, bottom: 10 },
            },

            plugins: {
                title: {
                    display: true,
                    text: "Yearly",
                    font: {
                        family: "Nunito",
                        size: 15,
                        weight: 600,
                    },
                },
                legend: {
                    display: false,
                },
            },
        },
    });

    attendanceYearlyChart.data.datasets[0].data = chartData;
    attendanceYearlyChart.data.labels = chartLabels;
    attendanceYearlyChart.options.plugins.title.text = chartTitle;
    attendanceYearlyChart.update();
    console.log("Attendance YEARLY chart INITIALIZED!!!");
}

export function attendanceYearly(chartData, chartLabels, chartTitle) {
    if (!chartData) {
        console.log("Attendance Yearly: Passed chart data is undefined");
        return;
    }
    if (!chartLabels) {
        console.log("Attendance Yearly: Passed chart labels is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("Attendance Yearly: Passed chart title is undefined");
        return;
    }
    if (!attendanceYearlyChart) {
        console.log("Attendance YEARLY chart not initialized!!!");
        return;
    }

    attendanceYearlyChart.data.datasets[0].data = chartData;
    attendanceYearlyChart.data.labels = chartLabels;
    attendanceYearlyChart.options.plugins.title.text = chartTitle;
    attendanceYearlyChart.update();
    console.log("Attendance YEARLY chart updated");
}
