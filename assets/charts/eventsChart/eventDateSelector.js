import {
    getEventByMonth,
    getEventByQuarter,
    getEventByYearTotal,
} from "../getChartData.js";

import { eventsMonthly } from "./eventMonthly.js";
import { eventsQuarterly } from "./eventQuarterly.js";

export let selectedYear = document.getElementById("selectedYear");
export let selectedMonth = document.getElementById("selectedMonth");

let year = document.getElementById("card-year");
let month = document.getElementById("card-month");
let yearlyTotal = document.getElementById("card-yearly-total");
console.log("selectedYear: ", selectedYear.value);
function getDateSelectorElements() {
    selectedYear = document.getElementById("selectedYear");
    selectedMonth = document.getElementById("selectedMonth");
    year = document.getElementById("card-year");
    month = document.getElementById("card-month");
    yearlyTotal = document.getElementById("card-yearly-total");
}

export function setupEventChartsListeners() {
    // re initialize the date selector elements
    getDateSelectorElements();

    if (selectedMonth) {
        selectedMonth.addEventListener("change", setCardDate);
        selectedMonth.addEventListener("change", setEventMonthlyChart);
    }
    if (selectedYear) {
        selectedYear.addEventListener("change", setCardDate);
        selectedYear.addEventListener("change", setEventMonthlyChart);
        selectedYear.addEventListener("change", setCardYearlyTotal);
        selectedYear.addEventListener("change", setEventQuarterlyChart);
    }

    // Call Functions to set initial values
    setCardDate();
    setCardYearlyTotal();
}

// function setEventYearlyChart() {
//     let newData = getAttendanceByYear(selectedYear);
//     attendanceYearly(
//         newData.YEARLY_DATA,
//         newData.YEARLY_LABELS,
//         newData.YEARLY_TITLE
//     );
// }

function setEventMonthlyChart() {
    let newData = getEventByMonth(selectedYear, selectedMonth);
    eventsMonthly(
        newData.MONTHLY_DATA,
        newData.MONTHLY_LABELS,
        newData.MONTHLY_TITLE
    );
}

function setEventQuarterlyChart() {
    let newData = getEventByQuarter(selectedYear);
    eventsQuarterly(newData.QUARTERLY_DATA, newData.QUARTERLY_TITLE);
}

function setCardDate() {
    if (year && year.innerHTML) {
        year.innerHTML = selectedYear.value;
    }

    if (month && month.innerHTML) {
        month.innerHTML = selectedMonth.value;
    }
}

function setCardYearlyTotal() {
    if (yearlyTotal && yearlyTotal.innerHTML) {
        let newData = getEventByYearTotal(selectedYear);
        yearlyTotal.innerHTML = newData.YEARLY_TOTAL_DATA;
    }
}
