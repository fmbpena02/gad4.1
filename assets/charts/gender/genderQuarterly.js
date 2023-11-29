let chartCanvas = document.getElementById("side-chart-quarterly");
let genderQuarterlyChart;

// Export function to create the quarterly chart
export function initializeGenderQuarterlyChart(
    maleData,
    femaleData,
    PreferNotToSayData,
    chartTitle
) {
    chartCanvas = document.getElementById("side-chart-quarterly");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    genderQuarterlyChart = new Chart(chartCanvas, {
        type: "bar",
        data: {
            labels: ["Q1", "Q2", "Q3", "Q4"],
            datasets: [
                {
                    type: "bar",
                    label: "Male",
                    data: [],
                    borderWidth: 0,
                    borderRadius: 15,
                    backgroundColor: "rgba(96, 59, 248, 0.9)",
                    borderColor: "rgba(96, 59, 248, 0)",
                    hoverBackgroundColor: "rgba(96, 59, 248, 0.4)",
                    hoverBorderWidth: 3,
                },

                {
                    type: "bar",
                    label: "Female",
                    data: [],

                    borderWidth: 0,
                    borderRadius: 15,
                    backgroundColor: "rgba(255, 42, 133, 0.9)",
                    borderColor: "rgba(255, 42, 133, 0)",
                    hoverBackgroundColor: "rgba(255, 42, 133, 0.4)",
                    hoverBorderWidth: 3,
                },

                {
                    type: "bar",
                    label: "Prefer Not to Say",
                    data: [],
                    borderWidth: 0,
                    borderRadius: 5,
                    backgroundColor: "rgba(255, 204, 79, 0.9)",
                    borderColor: "rgba(255, 204, 79, 0)",
                    hoverBackgroundColor: "rgba(255, 204, 79, 0.4)",
                    hoverBorderWidth: 3,
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                    display: true,
                },
                y: {
                    stacked: true,
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
                    display: true,
                },
            },
        },
    });

    genderQuarterlyChart.data.datasets[0].data = maleData;
    genderQuarterlyChart.data.datasets[1].data = femaleData;
    genderQuarterlyChart.data.datasets[2].data = PreferNotToSayData;
    genderQuarterlyChart.options.plugins.title.text = chartTitle;
    genderQuarterlyChart.update();
    console.log("gender QUARTERLY chart INITIALIZED!!!");
}

export function genderQuarterly(
    maleData,
    femaleData,
    PreferNotToSayData,
    chartTitle
) {
    if (!maleData || !femaleData || !PreferNotToSayData) {
        console.log("gender QUARTERLY: Passed chart data is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("gender QUARTERLY: Passed chart title is undefined");
        return;
    }
    if (!genderQuarterlyChart) {
        console.log("gender QUARTERLY chart not initialized!!!");
        return;
    }

    genderQuarterlyChart.data.datasets[0].data = maleData;
    genderQuarterlyChart.data.datasets[1].data = femaleData;
    genderQuarterlyChart.data.datasets[2].data = PreferNotToSayData;
    genderQuarterlyChart.options.plugins.title.text = chartTitle;
    genderQuarterlyChart.update();
    console.log("gender QUARTERLY chart updated");
}
