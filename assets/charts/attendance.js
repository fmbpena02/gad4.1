// Export function to create the attendance main chart
export function attendanceMonthlyChart(chartData, chartLabels) {
    const chartCanvas = document.getElementById("main-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    const attendanceMonthlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: chartLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 0,
                    borderColor: "rgba(54, 162, 235, 0.8)",
                    hoverBackgroundColor: "rgba(54, 162, 235, 0.6)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: chartData,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },

            layout: {
                padding: 20,
            },
        },
    });

    attendanceMonthlyChart.update();
}

// Export function to create the yearly chart
export function attendanceYearlyChart(chartData, chartLabels) {
    const chartCanvas = document.getElementById("yearly-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    const attendanceYearlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: chartLabels,
            datasets: [
                {
                    label: "Attendance",
                    backgroundColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 0,
                    borderColor: "rgba(54, 162, 235, 0.8)",
                    hoverBackgroundColor: "rgba(54, 162, 235, 0.6)",
                    hoverBorderWidth: 3,
                    borderRadius: 15,
                    data: chartData,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },

            layout: {
                padding: 20,
            },
        },
    });

    attendanceYearlyChart.update();
}

// Export function to create the quarterly chart
export function attendanceQuarterlyChart(chartData) {
    const chartCanvas = document.getElementById("side-chart-quarterly");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    const attendanceQuarterlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [
                {
                    label: "Attendance",
                    borderWidth: 0,
                    backgroundColor: "rgba(75,192,192,0.6)",
                    borderColor: "rgba(75,192,192,1)",
                    hoverBackgroundColor: "rgba(75,192,192,1)",
                    hoverBorderWidth: 3,
                    borderRadius: 5,
                    data: chartData,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    display: true,
                },
            },
        },
    });

    attendanceQuarterlyChart.update();
}
