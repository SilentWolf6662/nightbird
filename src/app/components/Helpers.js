function getCurDate(date) {
    let yourDate = new Date(date);

    if (isNaN(yourDate.getTime())) {
        return ""; // Return an empty string if the date is invalid
    }

    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset * 60 * 1000));
    return yourDate.toISOString().split('T')[0];
}

function formatDate(date) {
    let dateToFormat = new Date(date),
        dateString = "",
        month = `${dateToFormat.getMonth() + 1}`,
        day = `${dateToFormat.getDate()}`,
        year = dateToFormat.getFullYear(),
        monthName = dateToFormat.toLocaleString('default', { month: 'long' });

    if (month.length < 2)
        month = `0${month}`;
    if (day.length < 2)
        day = `0${day}`;

    dateString = `${day}. ${monthName} ${year}`;

    return dateString;
}

export { getCurDate, formatDate };