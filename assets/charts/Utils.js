export const years = Array.from({ length: 7 }, (_, i) => i + 2017);

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

export function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}

export const COLORS = [
    "#6a0bb3",
    "#e1aeff",
    "#ff78c4",
    "#dd58d6",
    "#9336b4",
    "#c5dff8",
    "#dde6ed",
    "#ffbdf7",
];

export function color(index) {
    return COLORS[index % COLORS.length];
}

export const CHART_COLORS = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
};

const NAMED_COLORS = [
    CHART_COLORS.red,
    CHART_COLORS.orange,
    CHART_COLORS.yellow,
    CHART_COLORS.green,
    CHART_COLORS.blue,
    CHART_COLORS.purple,
    CHART_COLORS.grey,
];

export function namedColor(index) {
    return NAMED_COLORS[index % NAMED_COLORS.length];
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function numbers({ count, min, max }) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr;
}

export function randomStrings({ count, minLen, maxLen }) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let strings = [];

    for (let i = 0; i < count; i++) {
        let str = "";
        let strLen = Math.floor(Math.random() * (maxLen - minLen + 1) + minLen);

        for (let j = 0; j < strLen; j++) {
            str += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        strings.push(str);
    }

    return strings;
}
