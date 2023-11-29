let chartCanvas = document.getElementById("main-chart");
let genderMainChart;

export function initializeGenderMainChart(
    maleData,
    femaleData,
    PreferNotToSayData,
    chartLabels,
    chartTitle
) {
    chartCanvas = document.getElementById("main-chart");

    // If the chart canvas doesn't exist, exit the function
    if (!chartCanvas) {
        return;
    }

    genderMainChart = new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Male",
                    data: [],
                    fill: false,
                    tension: 0.5,
                    backgroundColor: "rgba(96, 59, 248, 0.5)",
                    borderColor: "rgba(96, 59, 248, 0.9)",
                    pointStyle: "rectRot",
                    pointRadius: 5,
                    pointBorderColor: "rgba(96, 59, 248, 1)",
                },

                {
                    label: "Female",
                    data: [],
                    fill: false,
                    tension: 0.5,
                    backgroundColor: "rgba(255, 42, 133, 0.5)",
                    borderColor: "rgba(255, 42, 133, 0.9)",
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointBorderColor: "rgba(255, 42, 133, 1)",
                },

                {
                    label: "Prefer Not to Say",
                    data: [],
                    fill: false,
                    tension: 0.5,
                    backgroundColor: "rgba(255, 204, 79, 0.9)",
                    borderColor: "rgba(255, 204, 79, 1)",
                    pointStyle: "triangle",
                    pointRadius: 5,
                    pointBorderColor: "rgba(255, 204, 79, 1)",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: "index",
                intersect: false,
            },
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
                    display: true,
                    labels: {
                        usePointStyle: true,
                    },
                },
                tooltip: {
                    position: "average",
                },
            },
        },
    });

    genderMainChart.data.datasets[0].data = maleData;
    genderMainChart.data.datasets[1].data = femaleData;
    genderMainChart.data.datasets[2].data = PreferNotToSayData;
    genderMainChart.data.labels = chartLabels;
    genderMainChart.options.plugins.title.text = chartTitle;
    genderMainChart.update();
    console.log("gender MAIN chart INITIALIZED!!!");
}

export function genderYearly(
    maleData,
    femaleData,
    PreferNotToSayData,
    chartLabels,
    chartTitle
) {
    if (!maleData || !femaleData || !PreferNotToSayData) {
        console.log("gender Yearly: Passed chart data is undefined");
        return;
    }
    if (!chartLabels) {
        console.log("gender Yearly: Passed chart labels is undefined");
        return;
    }
    if (!chartTitle) {
        console.log("gender Yearly: Passed chart title is undefined");
        return;
    }
    if (!genderMainChart) {
        console.log("gender MAIN chart not initialized!!!");
        return;
    }

    genderMainChart.data.datasets[0].data = maleData;
    genderMainChart.data.datasets[1].data = femaleData;
    genderMainChart.data.datasets[2].data = PreferNotToSayData;
    genderMainChart.data.labels = chartLabels;
    genderMainChart.options.plugins.title.text = chartTitle;
    genderMainChart.options.scales.x.title.text = "Months";
    genderMainChart.update();
    console.log("gender YEARLY chart updated");
}

export function genderMonthly(
    maleData,
    femaleData,
    PreferNotToSayData,
    chartLabels,
    chartTitle
) {
    if (!maleData || !femaleData || !PreferNotToSayData) {
        console.log("gender Monthly: Passed chart data is undefined");
        console.log("maleData: ", maleData);
        console.log("femaleData: ", femaleData);
        console.log("PreferNotToSayData: ", PreferNotToSayData);
        return;
    }
    if (!chartLabels) {
        console.log("gender Monthly: Passed chart labels is undefined");
        return;
    }
    if (!genderMainChart) {
        console.log("gender MONTHLY chart not initialized!!!");
        return;
    }

    genderMainChart.data.datasets[0].data = maleData;
    genderMainChart.data.datasets[1].data = femaleData;
    genderMainChart.data.datasets[2].data = PreferNotToSayData;
    genderMainChart.data.labels = chartLabels;
    genderMainChart.options.plugins.title.text = chartTitle;
    genderMainChart.options.scales.x.title.text = "Events";
    genderMainChart.update();
    console.log("gender MONTHLY chart updated");
}
