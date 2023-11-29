import { months, getRandomInt, randomStrings, numbers } from "./Utils.js";

// ATTENDANCE CHARTS
// FUNCTIONS TO GET DATA FOR ATTENDANCE CHARTS
export function getAttendanceByMonth(attndSelectedYear, attndSelectedMonth) {
    let RANDOM_LENGTH = getRandomInt(3, 20);
    let MONTHLY_DATA = numbers({ count: RANDOM_LENGTH, min: 0, max: 100 });
    let MONTHLY_LABELS = randomStrings({
        count: RANDOM_LENGTH,
        minLen: 8,
        maxLen: 20,
    });
    let MONTHLY_TITLE = "Monthly (" + attndSelectedMonth.value + ")";

    return { MONTHLY_DATA, MONTHLY_LABELS, MONTHLY_TITLE };
}

export function getAttendanceByYear(attndSelectedYear) {
    let YEARLY_DATA = numbers({ count: 12, min: 100, max: 350 });
    let YEARLY_LABELS = months({ count: 12 });
    let YEARLY_TITLE = "Yearly (" + attndSelectedYear.value + ")";

    return { YEARLY_DATA, YEARLY_LABELS, YEARLY_TITLE };
}

export function getAttendanceByQuarter(attndSelectedYear) {
    let QUARTERLY_DATA = numbers({ count: 4, min: 20, max: 500 });
    let QUARTERLY_LABELS = ["Q1", "Q2", "Q3", "Q4"];
    let QUARTERLY_TITLE = "Quarterly (" + attndSelectedYear.value + ")";

    return { QUARTERLY_DATA, QUARTERLY_LABELS, QUARTERLY_TITLE };
}

export function getAttendanceByYearTotal(attndSelectedYear) {
    let YEARLY_TOTAL_DATA = getRandomInt(500, 5000);
    return { YEARLY_TOTAL_DATA };
}

export function getAttendanceByMonthTotal(
    attndSelectedYear,
    genderSelectedMonth
) {
    let MONTHLY_TOTAL_DATA = getRandomInt(50, 500);
    return { MONTHLY_TOTAL_DATA };
}

// GENDER CHARTS
// FUNCTIONS TO GET DATA FOR GENDER CHARTS
export function getGenderByMonth(genderSelectedYear, genderSelectedMonth) {
    let RANDOM_LENGTH = getRandomInt(3, 20);
    let MONTHLY_MALE = numbers({ count: RANDOM_LENGTH, min: 1, max: 150 });
    let MONTHLY_FEMALE = numbers({ count: RANDOM_LENGTH, min: 1, max: 150 });
    let MONTHLY_PREFERNOTTOSAY = numbers({
        count: RANDOM_LENGTH,
        min: 1,
        max: 150,
    });

    let MONTHLY_LABELS = randomStrings({
        count: RANDOM_LENGTH,
        minLen: 8,
        maxLen: 20,
    });
    let MONTHLY_TITLE = "Monthly (" + genderSelectedMonth.value + ")";

    return {
        MONTHLY_MALE,
        MONTHLY_FEMALE,
        MONTHLY_PREFERNOTTOSAY,
        MONTHLY_LABELS,
        MONTHLY_TITLE,
    };
}

export function getGenderByYear(genderSelectedYear) {
    let YEARLY_MALE = numbers({ count: 12, min: 1, max: 150 });
    let YEARLY_FEMALE = numbers({ count: 12, min: 1, max: 150 });
    let YEARLY_PREFERNOTTOSAY = numbers({ count: 12, min: 1, max: 150 });

    let YEARLY_LABELS = months({ count: 12 });
    let YEARLY_TITLE = "Yearly (" + genderSelectedYear.value + ")";

    return {
        YEARLY_MALE,
        YEARLY_FEMALE,
        YEARLY_PREFERNOTTOSAY,
        YEARLY_LABELS,
        YEARLY_TITLE,
    };
}

export function getGenderByQuarter(genderSelectedYear) {
    let QUARTERLY_MALE = numbers({ count: 4, min: 1, max: 150 });
    let QUARTERLY_FEMALE = numbers({ count: 4, min: 1, max: 150 });
    let QUARTERLY_PREFERNOTTOSAY = numbers({ count: 4, min: 1, max: 150 });

    let QUARTERLY_LABELS = ["Q1", "Q2", "Q3", "Q4"];
    let QUARTERLY_TITLE = "Quarterly (" + genderSelectedYear.value + ")";

    return {
        QUARTERLY_MALE,
        QUARTERLY_FEMALE,
        QUARTERLY_PREFERNOTTOSAY,
        QUARTERLY_LABELS,
        QUARTERLY_TITLE,
    };
}

export function getGenderByYearTotal(genderSelectedYear) {
    let YEARLY_DATA = numbers({ count: 3, min: 3, max: 350 });
    let YEARLY_LABELS = null;
    let YEARLY_TITLE = "Yearly Total (" + genderSelectedYear.value + ")";

    return { YEARLY_DATA, YEARLY_LABELS, YEARLY_TITLE };
}

export function getGenderByMonthTotal(genderSelectedYear, genderSelectedMonth) {
    let MONTHLY_DATA = numbers({ count: 3, min: 3, max: 350 });
    let MONTHLY_LABELS = null;
    let MONTHLY_TITLE = "Monthly Total (" + genderSelectedMonth.value + ")";

    return { MONTHLY_DATA, MONTHLY_LABELS, MONTHLY_TITLE };
}

// EVENT CHARTS
// FUNCTIONS TO GET DATA FOR EVENT CHARTS
export function getEventByMonth(eventSelectedYear, eventSelectedMonth) {
    let MONTHLY_DATA = numbers({ count: 12, min: 1, max: 20 });
    let MONTHLY_LABELS = months({ count: 12 });
    let MONTHLY_TITLE = "Yearly (" + eventSelectedYear.value + ")";

    return { MONTHLY_DATA, MONTHLY_LABELS, MONTHLY_TITLE };
}

export function getEventByQuarter(eventSelectedYear) {
    let QUARTERLY_DATA = numbers({ count: 4, min: 20, max: 500 });
    let QUARTERLY_LABELS = ["Q1", "Q2", "Q3", "Q4"];
    let QUARTERLY_TITLE = "Quarterly (" + eventSelectedYear.value + ")";

    return { QUARTERLY_DATA, QUARTERLY_LABELS, QUARTERLY_TITLE };
}

export function getEventByYearTotal(eventSelectedYear) {
    let YEARLY_TOTAL_DATA = getRandomInt(500, 5000);
    return { YEARLY_TOTAL_DATA };
}
