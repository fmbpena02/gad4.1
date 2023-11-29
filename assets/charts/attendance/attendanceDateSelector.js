import {
    getAttendanceByQuarter,
    getAttendanceByYear,
    getAttendanceByMonth,
    getAttendanceByYearTotal,
    getAttendanceByMonthTotal,
} from "../getChartData.js";

import { attendanceMonthly } from "./attendanceMonthly.js";
import { attendanceYearly } from "./attendanceYearly.js";
import { attendanceQuarterly } from "./attendanceQuarterly.js";

export let selectedYear = document.getElementById("selectedYear");
export let selectedMonth = document.getElementById("selectedMonth");

let year = document.getElementById("card-year");
let month = document.getElementById("card-month");
let yearlyTotal = document.getElementById("card-yearly-total");
let monthlyTotal = document.getElementById("card-monthly-total");

function getDateSelectorElements() {
    selectedYear = document.getElementById("selectedYear");
    selectedMonth = document.getElementById("selectedMonth");
    year = document.getElementById("card-year");
    month = document.getElementById("card-month");
    yearlyTotal = document.getElementById("card-yearly-total");
    monthlyTotal = document.getElementById("card-monthly-total");
}

export function setupAttendanceEventListeners() {
    // re initialize the date selector elements
    getDateSelectorElements();

    if (selectedMonth) {
        selectedMonth.addEventListener("change", setCardDate);
        selectedMonth.addEventListener("change", setCardMonthlyTotal);
        selectedMonth.addEventListener("change", setAttendanceMonthlyChart);
    }
    if (selectedYear) {
        selectedYear.addEventListener("change", setCardDate);
        selectedYear.addEventListener("change", setCardYearlyTotal);
        selectedYear.addEventListener("change", setAttendanceMonthlyChart);
        selectedYear.addEventListener("change", setAttendanceYearlyChart);
        selectedYear.addEventListener("change", setAttendanceQuarterlyChart);
    }

    // Call Functions to set initial values
    setCardDate();
    setCardYearlyTotal();
    setCardMonthlyTotal();
}

function setAttendanceYearlyChart() {
    let newData = getAttendanceByYear(selectedYear);
    attendanceYearly(
        newData.YEARLY_DATA,
        newData.YEARLY_LABELS,
        newData.YEARLY_TITLE
    );
}

function setAttendanceMonthlyChart() {
    let newData = getAttendanceByMonth(selectedYear, selectedMonth);
    attendanceMonthly(
        newData.MONTHLY_DATA,
        newData.MONTHLY_LABELS,
        newData.MONTHLY_TITLE
    );
}

function setAttendanceQuarterlyChart() {
    let newData = getAttendanceByQuarter(selectedYear);
    attendanceQuarterly(newData.QUARTERLY_DATA, newData.QUARTERLY_TITLE);
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
        let newData = getAttendanceByYearTotal(selectedYear);
        yearlyTotal.innerHTML = newData.YEARLY_TOTAL_DATA;
    }
}

function setCardMonthlyTotal() {
    if (monthlyTotal && monthlyTotal.innerHTML) {
        let newData = getAttendanceByMonthTotal(selectedYear, selectedMonth);
        monthlyTotal.innerHTML = newData.MONTHLY_TOTAL_DATA;
    }
}
