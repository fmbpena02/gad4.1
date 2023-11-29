import {
    getAttendanceByQuarter,
    getAttendanceByYear,
    getAttendanceByMonth,
    getGenderByYear,
    getGenderByQuarter,
    getGenderByYearTotal,
    getGenderByMonthTotal,
    getEventByMonth,
    getEventByQuarter,
} from "./assets/charts/getChartData.js";

//
// ATTENDANCE CHARTS IMPORTS
import {
    setupAttendanceEventListeners,
    selectedYear as attndSelectedYear,
    selectedMonth as attndSelectedMonth,
} from "./assets/charts/attendance/attendanceDateSelector.js";

import { initializeAttendanceMonthlyChart } from "./assets/charts/attendance/attendanceMonthly.js";
import { initializeAttendanceQuarterlyChart } from "./assets/charts/attendance/attendanceQuarterly.js";
import { initializeAttendanceYearlyChart } from "./assets/charts/attendance/attendanceYearly.js";

//
// GENDER CHARTS IMPORTS
import {
    setupGenderEventListeners,
    selectedYear as genderSelectedYear,
    selectedMonth as genderSelectedMonth,
} from "./assets/charts/gender/genderDateSelector.js";

import { initializeGenderMainChart } from "./assets/charts/gender/genderMain.js";
import { initializeGenderQuarterlyChart } from "./assets/charts/gender/genderQuarterly.js";

//
// EVENT CHARTS IMPORTS
import {
    setupEventChartsListeners,
    selectedMonth as eventSelectedMonth,
    selectedYear as eventSelectedYear,
} from "./assets/charts/eventsChart/eventDateSelector.js";

import { initializeEventMonthlyChart } from "./assets/charts/eventsChart/eventMonthly.js";
import { initializeEventQuarterlyChart } from "./assets/charts/eventsChart/eventQuarterly.js";
import { initializeGenderTotalChart } from "./assets/charts/gender/genderTotal.js";
//
// ATTENDANCE CHART FUNCTIONS
function initAttndCharts_ONLOAD() {
    // Call setupEventListeners after updating the main content
    setupAttendanceEventListeners();

    let attndY_DUMMYDATA = getAttendanceByYear(attndSelectedYear);

    let attndM_DUMMYDATA = getAttendanceByMonth(
        attndSelectedYear,
        attndSelectedMonth
    );

    let attndQ_DUMMYDATA = getAttendanceByQuarter(attndSelectedYear);

    initializeAttendanceYearlyChart(
        attndY_DUMMYDATA.YEARLY_DATA,
        attndY_DUMMYDATA.YEARLY_LABELS,
        attndY_DUMMYDATA.YEARLY_TITLE
    );

    initializeAttendanceMonthlyChart(
        attndM_DUMMYDATA.MONTHLY_DATA,
        attndM_DUMMYDATA.MONTHLY_LABELS,
        attndM_DUMMYDATA.MONTHLY_TITLE
    );
    initializeAttendanceQuarterlyChart(
        attndQ_DUMMYDATA.QUARTERLY_DATA,
        attndQ_DUMMYDATA.QUARTERLY_TITLE
    );
}

//
// GENDER CHART FUNCTIONS
function initGenderCharts_ONLOAD() {
    setupGenderEventListeners();

    let genderY_DUMMYDATA = getGenderByYear(genderSelectedYear);
    let genderQ_DUMMYDATA = getGenderByQuarter(genderSelectedYear);
    let genderY_TOTAL_DUMMYDATA = getGenderByYearTotal(genderSelectedYear);

    initializeGenderMainChart(
        genderY_DUMMYDATA.YEARLY_MALE,
        genderY_DUMMYDATA.YEARLY_FEMALE,
        genderY_DUMMYDATA.YEARLY_PREFERNOTTOSAY,
        genderY_DUMMYDATA.YEARLY_LABELS,
        genderY_DUMMYDATA.YEARLY_TITLE
    );

    initializeGenderQuarterlyChart(
        genderQ_DUMMYDATA.QUARTERLY_MALE,
        genderQ_DUMMYDATA.QUARTERLY_FEMALE,
        genderQ_DUMMYDATA.QUARTERLY_PREFERNOTTOSAY,
        genderQ_DUMMYDATA.QUARTERLY_TITLE
    );

    initializeGenderTotalChart(
        genderY_TOTAL_DUMMYDATA.YEARLY_DATA,
        genderY_TOTAL_DUMMYDATA.YEARLY_TITLE
    );
}

//
// EVENT CHART FUNCTIONS
function initEventCharts_ONLOAD() {
    setupEventChartsListeners();

    // let eventY_DUMMYDATA = getAttendanceByYear(attndSelectedYear);
    // console.log("dummyData: ", attndY_DUMMYDATA);

    let eventM_DUMMYDATA = getEventByMonth(
        eventSelectedYear,
        eventSelectedMonth
    );

    let eventQ_DUMMYDATA = getEventByQuarter(eventSelectedYear);

    // initializeAttendanceYearlyChart(
    //     attndY_DUMMYDATA.YEARLY_DATA,
    //     attndY_DUMMYDATA.YEARLY_LABELS,
    //     attndY_DUMMYDATA.YEARLY_TITLE
    // );

    initializeEventMonthlyChart(
        eventM_DUMMYDATA.MONTHLY_DATA,
        eventM_DUMMYDATA.MONTHLY_LABELS,
        eventM_DUMMYDATA.MONTHLY_TITLE
    );
    initializeEventQuarterlyChart(
        eventQ_DUMMYDATA.QUARTERLY_DATA,
        eventQ_DUMMYDATA.QUARTERLY_TITLE
    );
}

function initializeDataTable() {
    jQuery("#data-table").DataTable();
    console.log("Data table initialized");
}

document.addEventListener("DOMContentLoaded", function (event) {
    initAttndCharts_ONLOAD();

    const navLinks = document.querySelectorAll(".nav_link"); // Get all navigation links
    const mainElement = document.querySelector("main"); // Get the main element

    // Add event listener to each link
    navLinks.forEach((link) => {
        // If the link is the 'import' link, skip this iteration
        if (link.id === "import") {
            return;
        }

        link.addEventListener("click", function (e) {
            // Prevent default action
            e.preventDefault();

            // Fetch the content of the page
            fetch(this.href)
                .then((response) => response.text())
                .then((data) => {
                    // Create a temporary DOM div element
                    const tempDom = new DOMParser().parseFromString(
                        data,
                        "text/html"
                    );

                    const mainContent = tempDom.querySelector("main").innerHTML; // Get the main content from the fetched HTML
                    mainElement.innerHTML = mainContent; // Replace the content of the main element

                    // DATE SELECTOR
                    try {
                        // Get the dateSelector content from the fetched HTML
                        const dateSelectorContent =
                            tempDom.querySelector("#dateSelector").innerHTML;
                        // Get the dateSelector element in the current page
                        const dateSelectorElement =
                            document.querySelector("#dateSelector");
                        // Replace the content of the dateSelector element
                        dateSelectorElement.innerHTML = dateSelectorContent;
                    } catch (error) {
                        console.log("ERROR: Loading dateSelector: ", error);
                        console.log(
                            "If called when trying to load logs page, its because logs.html doesnt have a dateSelector element"
                        );
                    }

                    // LOAD DIFFERENT CONTENT BASED ON THE LINK CLICKED
                    if (link.id === "attendance") {
                        initAttndCharts_ONLOAD();
                        console.log("Attendance link clicked");
                    }
                    if (link.id === "gender") {
                        // Call setupEventListeners after updating the main content
                        initGenderCharts_ONLOAD();
                        console.log("gender link clicked");
                    }
                    if (link.id === "events") {
                        // Call setupEventListeners after updating the main content
                        initEventCharts_ONLOAD();
                        console.log("events link clicked");
                    }
                    if (link.id === "logs") {
                        // Call initializeDataTable after updating the main content
                        initializeDataTable();
                        console.log("logs link clicked");
                    }
                });
        });
    });
});
