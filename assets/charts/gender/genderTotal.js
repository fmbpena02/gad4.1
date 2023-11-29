let chartCanvas = document.getElementById("yearly-chart");
let genderTotalChart;

export function initializeGenderTotalChart(chartData, chartTitle) {
    chartCanvas = document.getElementById("yearly-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    genderTotalChart = new Chart(chartCanvas, {
        type: "doughnut",
        data: {
            labels: ["Male", "Female", "Prefer Not To Say"],
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        "rgba(96, 59, 248, 0.8)",
                        "rgba(255, 42, 133, 0.8)",
                        "rgba(255, 204, 79, 0.8)",
                    ],
                    hoverBackgroundColor: [
                        "rgba(96, 59, 248, 0.4)",
                        "rgba(255, 42, 133, 0.4)",
                        "rgba(255, 204, 79, 0.4)",
                    ],
                    borderWidth: 0, // Set the border width to 2
                    borderColor: [
                        "rgba(96, 59, 248, 0.5)",
                        "rgba(255, 42, 133, 0.5)",
                        "rgba(255, 204, 79, 0.5)",
                    ],
                    hoverBorderWidth: 3,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { top: 5, left: 10, right: 10, bottom: 5 },
            },

            plugins: {
                title: {
                    display: true,
                    text: "Total",
                    font: {
                        family: "Nunito",
                        size: 15,
                        weight: 600,
                    },
                },
                legend: {
                    display: true,
                },
            },
        },
    });

    genderTotalChart.data.datasets[0].data = chartData;
    genderTotalChart.options.plugins.title.text = chartTitle;
    genderTotalChart.update();
    console.log("gender TOTAL chart INITIALIZED!!!");
}

export function genderYearTotal(chartData, chartTitle) {
    if (!chartData) {
        console.log("gender YEAR Total: Passed chart data is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("gender YEAR Total: Passed chart title is undefined");
        return;
    }
    if (!genderTotalChart) {
        console.log("gender YEAR MAIN chart not initialized!!!");
        return;
    }

    genderTotalChart.data.datasets[0].data = chartData;
    genderTotalChart.options.plugins.title.text = chartTitle;
    genderTotalChart.update();
    console.log("gender YEAR Total chart updated");
}

export function genderMonthTotal(chartData, chartTitle) {
    if (!chartData) {
        console.log("gender MONTH Total: Passed chart data is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("gender MONTH Total: Passed chart title is undefined");
        return;
    }
    if (!genderTotalChart) {
        console.log("gender MONTH MAIN chart not initialized!!!");
        return;
    }

    genderTotalChart.data.datasets[0].data = chartData;
    genderTotalChart.options.plugins.title.text = chartTitle;
    genderTotalChart.update();
    console.log("gender MONTH Total chart updated");
    console.log("Chart Title: ", chartTitle);
}
