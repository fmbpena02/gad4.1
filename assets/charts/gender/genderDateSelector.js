import {
    getGenderByYear,
    getGenderByMonth,
    getGenderByQuarter,
    getGenderByYearTotal,
    getGenderByMonthTotal,
} from "../getChartData.js";

import { genderYearly, genderMonthly } from "./genderMain.js";
import { genderQuarterly } from "./genderQuarterly.js";
import { genderYearTotal, genderMonthTotal } from "./genderTotal.js";

export let selectedYear = document.getElementById("selectedYear");
export let selectedMonth = document.getElementById("selectedMonth");

let year = document.getElementById("card-year");
let month = document.getElementById("card-month");

function getDateSelectorElements() {
    selectedYear = document.getElementById("selectedYear");
    selectedMonth = document.getElementById("selectedMonth");
    year = document.getElementById("card-year");
    month = document.getElementById("card-month");
}

export function setupGenderEventListeners() {
    // re initialize the date selector elements
    getDateSelectorElements();

    if (selectedMonth) {
        selectedMonth.addEventListener("change", setCardDate);
        selectedMonth.addEventListener("change", setGenderMonthlyChart);
        selectedMonth.addEventListener("change", setGenderMonthTotalChart);
    }
    if (selectedYear) {
        selectedYear.addEventListener("change", setCardDate);
        selectedYear.addEventListener("change", setGenderYearlyChart);
        selectedYear.addEventListener("change", setGenderQuarterlyChart);
        selectedYear.addEventListener("change", setGenderYearTotalChart);
    }

    // Call Functions to set initial values
    setCardDate();
}

function setGenderYearlyChart() {
    let newData = getGenderByYear(selectedYear);
    genderYearly(
        newData.YEARLY_MALE,
        newData.YEARLY_FEMALE,
        newData.YEARLY_PREFERNOTTOSAY,
        newData.YEARLY_LABELS,
        newData.YEARLY_TITLE
    );
}

function setGenderMonthlyChart() {
    let newData = getGenderByMonth(selectedYear, selectedMonth);

    genderMonthly(
        newData.MONTHLY_MALE,
        newData.MONTHLY_FEMALE,
        newData.MONTHLY_PREFERNOTTOSAY,
        newData.MONTHLY_LABELS,
        newData.MONTHLY_TITLE
    );
}

function setGenderQuarterlyChart() {
    let newData = getGenderByQuarter(selectedYear);
    genderQuarterly(
        newData.QUARTERLY_MALE,
        newData.QUARTERLY_FEMALE,
        newData.QUARTERLY_PREFERNOTTOSAY,
        newData.QUARTERLY_TITLE
    );
}

function setGenderYearTotalChart() {
    let newData = getGenderByYearTotal(selectedYear);
    genderYearTotal(newData.YEARLY_DATA, newData.YEARLY_TITLE);
}

function setGenderMonthTotalChart() {
    let newData = getGenderByMonthTotal(selectedYear, selectedMonth);
    genderMonthTotal(newData.MONTHLY_DATA, newData.MONTHLY_TITLE);
}

function setCardDate() {
    if (year && year.innerHTML) {
        year.innerHTML = selectedYear.value;
    }

    if (month && month.innerHTML) {
        month.innerHTML = selectedMonth.value;
    }
}
