let monthlyChartCanvas = document.getElementById("main-chart");
let attendanceMonthlyChart;

let AttendanceMonthlyData = [];
let AttendanceMonthlyLabels = [];

export function initializeAttendanceMonthlyChart(
    chartData,
    chartLabels,
    chartTitle
) {
    monthlyChartCanvas = document.getElementById("main-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!monthlyChartCanvas) {
        return;
    }

    attendanceMonthlyChart = new Chart(monthlyChartCanvas, {
        type: "bar",
        data: {
            labels: AttendanceMonthlyLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(0, 98, 255, 0.9)",
                    borderWidth: 0,
                    borderColor: "rgba(0, 98, 255, 0.5)",
                    hoverBackgroundColor: "rgba(0, 98, 255, 0.4)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: AttendanceMonthlyData,
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
                        text: "Events",
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
                        text: "Attendance Count",
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

    attendanceMonthlyChart.data.datasets[0].data = chartData;
    attendanceMonthlyChart.data.labels = chartLabels;
    attendanceMonthlyChart.options.plugins.title.text = chartTitle;
    attendanceMonthlyChart.update();
    console.log("Attendance MONTHLY chart INITIALIZED!!!");
}

// Export function to create the attendance main chart
export function attendanceMonthly(chartData, chartLabels, chartTitle) {
    if (!chartData) {
        console.log("Attendance Monthly: Passed chart data is undefined");
        return;
    }
    if (!chartLabels) {
        console.log("Attendance Monthly: Passed chart labels is undefined");
        return;
    }
    if (!attendanceMonthlyChart) {
        console.log("Attendance MONTHLY chart not initialized!!!");
        return;
    }

    attendanceMonthlyChart.data.datasets[0].data = chartData;
    attendanceMonthlyChart.data.labels = chartLabels;
    attendanceMonthlyChart.options.plugins.title.text = chartTitle;
    attendanceMonthlyChart.update();
    console.log("Attendance MONTHLY chart updated");
}
