const MILLISECONDS_PER_DAY = 86400000;

function formatStringToDate(string) {
    let date = new Date();
    
    if (string !== "NULL") {
        if (string.includes("-")) {
            const dateArray = string.split("-");
            date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
        } else if (string.includes("/")) {
            const dateArray = string.split("/");
            date = new Date(dateArray[2], dateArray[0] - 1, dateArray[1]);
        } else if (string.includes(" ")) {
            date = new Date(Date.parse(string));
        }
    }
 
    return date;
}

function formatDateFromArray(array) {
    const day = array[2];
    const month = array[1];
    const year = array[3];
    
    return `${day} ${month} ${year}`;
}

function calculateDaysOnProject(start, end) {
    const startDate = formatStringToDate(start);
    const endDate = formatStringToDate(end);
    const days = Math.ceil(Math.abs(endDate - startDate) / MILLISECONDS_PER_DAY);

    return days;
}

function calculateOverlappingDays(firstEmployee, secondEmployee) {
    const firstEmployeeStart = formatStringToDate(firstEmployee.start);
    const firstEmployeeEnd = formatStringToDate(firstEmployee.end);
    const secondEmployeeStart = formatStringToDate(secondEmployee.start);
    const secondEmployeeEnd = formatStringToDate(secondEmployee.end);

    const overlapStart = new Date(Math.max(firstEmployeeStart, secondEmployeeStart));
    const overlapEnd = new Date(Math.min(firstEmployeeEnd, secondEmployeeEnd));

    const overlapDays = Math.ceil(Math.max(0, (overlapEnd - overlapStart) / MILLISECONDS_PER_DAY));

    return [overlapDays, overlapStart.toDateString(), overlapEnd.toDateString()];
}

export { calculateDaysOnProject, calculateOverlappingDays, formatDateFromArray, formatStringToDate }